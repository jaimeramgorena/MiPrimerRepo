import { Injectable } from "@nestjs/common";

@Injectable()
export class PublicacionService{
    publicaciones =[
        {id:1,
         titulo:"Requerimiento de personal",
         descripcion:"Se requiere un desarrollador backend Node Nest",
         imagen:"Publi1.jpg",
         estado:true
        }
    ];
    listar(){
        return this.publicaciones;
    }
    guardar(datos:any){
        this.publicaciones.push(datos);
        return datos;
    }
    mostrar(id:number){
        return this.publicaciones.find(pub =>pub.id===id)
    }
}