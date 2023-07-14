<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\PostsByUserController;
use App\Http\Controllers\API\SongController;
use App\Http\Controllers\API\SongsByUserController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\YoutubeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('users/{id}',[UserController::class,'show']);
    Route::put('users/{id}',[UserController::class,'update']);

    Route::post('songs',[SongController::class,'store']);
    Route::delete('songs/{id}/{user_id}',[SongController::class,'destroy']);

    Route::get('user/{user_id}/songs',[SongsByUserController::class,'index']);


    Route::get('youtube/{user_id}',[YoutubeController::class,'show']);
    Route::post('youtube',[YoutubeController::class,'store']);
    Route::delete('youtube/{id}',[YoutubeController::class,
    'destroy']);

    Route::get('posts', [PostController::class, 'index']);
    Route::get('posts/{id}', [PostController::class, 'show']);
    Route::post('posts', [PostController::class, 'store']);
    Route::put('posts/{id}', [PostController::class, 'update']);
    Route::delete('posts/{id}', [PostController::class, 'destroy']);

    Route::get('user/{user_id}/posts',[PostsByUserController::class,'show']);

    Route::post('logout',[AuthController::class,'logout']);



});

