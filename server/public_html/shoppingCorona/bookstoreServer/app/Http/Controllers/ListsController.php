<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;
use App\Comments;
use App\Item;
use App\Lists;
use App\User;
//use http\Client\Curl\User;
use Illuminate\Support\Facades\DB;
use PhpParser\Error;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use test\Mockery\MockingAllLowerCasedMethodsTest;
use test\Mockery\MockingNullableMethodsTest;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Database\Eloquent;


class ListsController extends Controller
{

    public function index()
    {
        $list = Lists::with('items', 'comments')->get()->toArray();
        return $list;
    }


    //get ShoppingList by ID ->funkt
    public function getListById(string $id) : Lists {
        $lists = Lists::where('id', $id)
            ->with(['items', 'comments'])
            ->first();
        return $lists;
    }
    //saveList ->funkt nur comment net
    public function save (Request $request) : JsonResponse {
        $request = $this->parseRequest($request);
        $user = $this->getUserById($request);

        DB::beginTransaction();
        $lists = Lists::create($request->all());
        try {
            //save user

            // save items
            if (isset($request['item']) && is_array($request['item'])) {
                foreach ($request['item'] as $item) {
                    $item = Item::firstOrNew(['description' => $item['description'], 'amount' => $item['amount'],
                        'max_price' => $item['max_price']]);
                    $lists->items()->save($item);
                }
            }

            // save comment -->not working
            if (isset($request['comments']) ) {
                foreach ($request['comments'] as $comment) {
                    $comment = Comments::firstOrNew(['text' => $comment['text']]);
                    $lists->comments()->save($comment);
                }
            }
            DB::commit();
            // return a valid HTTP response
            return response()->json($lists, 201);
        }

        catch (\Exception $e) {
            // rollback all queries
            DB::rollBack();
            return response()->json("saving shopping list failed: " . $e->getMessage(), 420);
        }
    }
    //delete list by id ->funkt
    public function deleteListById($id)
    {
        try {
            $coronaShoppingList = Lists::find($id);
            if ($coronaShoppingList) {
                $coronaShoppingList->delete();
            }
            return response()->json('deleted', 204);
        } catch (Error $e) {
            return response()->json([
                'response' => 'Deleting Item failed',
                'message' => $e->getMessage()
            ], 420);
        }
    }
    //update List -> alles außer comments klappt
    public function update (Request $request, string $id) {

        DB::beginTransaction();
        try{
            $lists = Lists::with(['items', 'comments'])
                ->where('id', $id)->first();
            if ($lists != null) {
                $request = $this->parseRequest($request);
                $lists->update($request->all());
                // delete all old items
                $lists->items()->delete();
                // save items

                if (isset($request['item']) && is_array($request['item'])) {

                    foreach ($request['item'] as $item) {
                        $item = Item::firstOrNew(['description' => $item['description'], 'amount' => $item['amount'],
                            'max_price' => $item['max_price']]);
                        $lists->items()->save($item);
                    }
                }
                // delete all old comments
                $lists->comments()->delete();
                // save comments
                if (isset($request['comments']) && is_array($request['comments'])) {
                    foreach ($request['comments'] as $comment) {
                        $comment = Comments::firstOrNew(['text' => $comment['text']]);
                        $lists->comments()->save($comment);
                    }
                }
            }
            DB::commit();
            $lists = Lists::with(['items', 'comments'])
                ->where('id', $id)->first();

            // return valid http response
            return response()->json($lists, 201);

        }
        catch(\Exception $e){
            //rollback all queries
            DB::rollBack();
            return response()->json("updating list failed: " . $e->getMessage(), 420);
        }
    }

    public function getUserById($id){

        try {

            $user = User::find($id);

            return response()->json($user, 200);

        } catch (Error $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    private function parseRequest(Request $req) : Request{

        $date = new \DateTime($req->due_date);
        $req["due_date"] = $date;

        return $req;
    }

    public function takeover(Request $request, $listId): JsonResponse
    {
        DB::beginTransaction();

        try {
            $lists = Lists::find($listId);
            $userID= $this->getUserById($request);

            $lists->volunteer_id = $userID;
            DB::commit();

            // return valid http response
            return response()->json($lists, 201);

        } catch (\Exception $e) {
            //rollback all queries
            DB::rollBack();
            return response()->json("Claiming list failed: " . $e->getMessage(), 420);
        }

    }


}

                /*

                public function show($list){
                    $list = Lists::find($list);
                    return view('lists.show', compact('list'));
                }
                public function getByName(string $name):Lists{
                    $list = Lists::where('name', $name)
                        ->with(['Items', 'Comments'])
                        ->first();
                    return $list;
                }


                public function checkName(string $name){
                    $list = Lists::where('name', $name)->first();
                    return $list != null ? response()->json('List with name ' .$name. ' exists!', 200):
                        response()->json('List with name ' .$name. ' does not exist!', 404);
                }
                find by search term -> Eloquent
                public function findBySearchTerm(string $searchTerm){
                    $list = Lists::with(['Items', 'Comments'])
                             ->where('name', 'LIKE', '%' . $searchTerm . '%')
                             ->orWhere('due_date', 'LIKE', '%' . $searchTerm . '%')
                             ->orWhere('final_sum', 'LIKE', '%' . $searchTerm . '%')

                             // search for items
                             ->orWhereHas ('items', function($query)  use ($searchTerm) {
                                 $query->where('description', 'LIKE', '%' . $searchTerm . '%')
                                     ->orWhere('max_price', 'LIKE', '%' . $searchTerm . '%');
                             })->get();
                    return $list;
                }*/


