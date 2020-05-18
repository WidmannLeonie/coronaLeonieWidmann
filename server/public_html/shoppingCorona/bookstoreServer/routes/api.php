<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Lists;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('lists/{id}', 'ListsController@deleteListById');

/* auth */
Route::group(['middleware' => ['api', 'cors']], function () {
    Route::post('auth/login', 'Auth\ApiAuthController@login');
  /*  Route::get('lists/{id}', 'ListsController@getListById');
    Route::get('lists/{id}', 'ListsController@deleteListById');
    Route::put('lists/{id}', 'ListsController@update');
    Route::post('list', 'ListsController@save');
    Route::delete('lists/{id}', 'ListsController@deleteListById');*/

});
Route::group(['middleware' => ['api', 'cors', 'auth.jwt']], function () {
    Route::get('lists', 'ListsController@index');
    Route::get('lists/{id}', 'ListsController@getListById');
    Route::put('lists/{id}', 'ListsController@update');
    Route::post('list', 'ListsController@save');
    Route::delete('lists/{id}', 'ListsController@deleteListById');
    Route::get('/getUserById/{id}', 'ListsController@getUserById');
    Route::post('lists', 'ListsController@save');
    Route::put('lists/takeover/{id}', 'ListsController@takeover');
});
