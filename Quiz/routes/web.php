<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/quiz/{testname}',[
	'middleware' => 'user',
	'uses' => 'Quiz\QuizController@getTest']);

Route::post('/api/user/authenticate','User\UserController@login');

Route::post('/api/user/logout', 'User\UserController@logout');

Route::post('/api/user/register', 'User\UserController@register');

Route::post('/api/user/{userid}', [
	'middleware' => 'user',
	'uses' => 'User\UserController@get']);
