import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PublicacionService } from "./publicacion.service";

interface Publicacion{
    "titulo": "Titulo de la publicacion",
    "descripcion":"Descripcion de la publicacion",
    "imagen":"publi.png",
    "estado":true
}


@Controller()
export class PublicacionController{

    constructor(private publiService:PublicacionService){}

    @Get("/publicacion")
    funListar(){
        return {mensaje:"Lista de Publicaciones",datos:this.publiService.listar()};
    }
    @Post("/publicacion")
    funGuardar(@Body() datos:Publicacion){
        this.publiService.guardar(datos);
        return {mensaje:"Publicacion guardada", datos};
    }
    @Get("/publicacion/:id")
    funMostar(@Param('id') id:string){
         const publi=this.publiService.mostrar(+id);
         return {mensaje:"Mostar publicacion:"+id,publi};
    }
    @Put("/publicacion/:id")
    funModificar(@Param('id') id:string,@Body() datos:any){
        return {mensaje:"Publicacion modificada:",id,datos};
    }
    @Delete("/publicacion/:id")
    funEliminar(@Param('id') id:string){
        return {mensaje:"Publicacion eliminada:",id};
    }
}