<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\comicsController;
use App\Http\Controllers\usuariosController;
use App\Http\Controllers\comentariosController;

Route::get('/', function () {
    return view('welcome');
});

/* Route::get('/vercomics', function () {
    return view('welcome');
}); */

/* Rutas para los comics */
Route::get('/vercomics', [comicsController::class, 'index']);
Route::get('/verporid', [comicsController::class, 'show']);
Route::post('/nuevocomics', [comicsController::class, 'store']);
Route::get('/eliminarcomics', [comicsController::class, 'destroy']);
Route::post('/updatecomics', [comicsController::class, 'update']);


/* Rutas para los usuarios */
Route::get('/verusuarios', [usuariosController::class, 'index']);
Route::get('/verporedad', [usuariosController::class, 'show']);
Route::post('/nuevousuarios', [usuariosController::class, 'store']);
Route::get('/eliminarusuarios', [usuariosController::class, 'destroy']);

/* Rutas para los comentarios */
Route::get('/vercomentarios', [comentariosController::class, 'index']);
Route::post('/nuevocomentarios', [comentariosController::class, 'store']);