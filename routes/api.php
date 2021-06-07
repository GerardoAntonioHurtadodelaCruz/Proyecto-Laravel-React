<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\comicsController;
use App\Http\Controllers\usuariosController;
use App\Http\Controllers\comentariosController;

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

/* Rutas para los comics */
Route::get('/vercomics', [comicsController::class, 'index']);
Route::get('/verporid', [comicsController::class, 'show']);
Route::post('/nuevocomics', [comicsController::class, 'store']);
Route::get('/eliminarcomics', [comicsController::class, 'destroy']);
Route::post('/updatecomics', [comicsController::class, 'update']);
Route::get('comicsToken', [comicsController::class, 'showToken']);


/* Rutas para los usuarios */
Route::get('/verusuarios', [usuariosController::class, 'index']);
Route::get('/verporedad', [usuariosController::class, 'show']);
Route::post('/nuevousuarios', [usuariosController::class, 'store']);
Route::get('/eliminarusuarios', [usuariosController::class, 'destroy']);


/* Rutas para los comentarios */
Route::get('/vercomentarios', [comentariosController::class, 'index']);
Route::post('/nuevocomentarios', [comentariosController::class, 'store']);