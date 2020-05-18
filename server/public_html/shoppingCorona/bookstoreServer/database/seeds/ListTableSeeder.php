<?php

use Illuminate\Database\Seeder;

class ListTableSeeder extends Seeder
{

    public function run()
    {
            $shoppinglist = new \App\Lists();
            $shoppinglist->name = 'Merkur';
            $shoppinglist->due_date = new DateTime();
            $shoppinglist->final_sum = 100;
            $shoppinglist->user_id = 1;
            $shoppinglist->created_at = date("Y-m-d H:i:s");
            $shoppinglist->updated_at = date("Y-m-d H:i:s");
            $shoppinglist->volunteer_id = 2;
            $shoppinglist->completed = false;

        $shoppinglist->save();

        $shoppinglist2 = new \App\Lists();
        $shoppinglist2->name = 'Billa';
        $shoppinglist2->due_date = new DateTime();
        $shoppinglist2->final_sum = 20;
        $shoppinglist2->user_id = 2;
        $shoppinglist2->created_at = date("Y-m-d H:i:s");
        $shoppinglist2->updated_at = date("Y-m-d H:i:s");
        $shoppinglist2->volunteer_id = 1;
        $shoppinglist2->completed = false;
        $shoppinglist2->save();

        $shoppinglist3 = new \App\Lists();
        $shoppinglist3->name = 'Spar';
        $shoppinglist3->due_date = new DateTime();
        $shoppinglist3->final_sum = 30;
        $shoppinglist3->user_id = 1;
        $shoppinglist3->created_at = date("Y-m-d H:i:s");
        $shoppinglist3->updated_at = date("Y-m-d H:i:s");
        $shoppinglist3->volunteer_id = 2;
        $shoppinglist3->completed = false;
        $shoppinglist3->save();
    }
}
