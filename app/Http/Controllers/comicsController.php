<?php

namespace App\Http\Controllers;

use App\Models\comics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class comicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return comics::all()->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request...

        $comics = new comics;

        $comics->titulo = $request->titulo;
        $comics->descripcion = $request->descripcion;
        $comics->editorial = $request->editorial;
        $comics->ano = $request->ano;
        $comics->paginas = $request->paginas;
        $comics->precio = $request->precio;

        $comics->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\comics  $comics
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        /* $mostrar =DB::table('comics')->where('id',2)->get();
        return $mostrar; */

        $mostrar = DB::table('comics')->where('id', $request->id)->get()->toJson();
        return $mostrar;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\comics  $comics
     * @return \Illuminate\Http\Response
     */
    public function edit(comics $comics)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\comics  $comics
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::table('comics')
            ->where('id', $request->id)
            ->update([
                'title'=> $request->title,
                'descripcion'=> $request->descripcion,
                'editorial'=> $request->editorial,
                'ano'=> $request->ano,
                'paginas'=> $request->paginas,
                'precio'=> $request->precio,
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\comics  $comics
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $eliminar = DB::table('comics')->where('id',$request->id)->delete();
    }
}
