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

/*Route::get('/test/{testname}', function($testName) {
	return File::get(realpath(__DIR__). '/../api/quiz-' . $testName . ".json");
});*/

Route::get('/api/quiz/{testname}', 'Quiz\QuizController@getTest');