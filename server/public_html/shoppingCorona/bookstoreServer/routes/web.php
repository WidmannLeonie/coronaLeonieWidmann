<?php
use App\Lists;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ListsController@index');
Route::get('/lists', 'ListsController@index');
Route::get('/lists/{list}', 'ListsController@show');

/*http://shoppingcorona.s1710456032.student.kwmhgb.at/lists
Route::get('/lists', function () {
    $lists = Lists::all();
    return view('lists.index', compact('lists'));
});*/
