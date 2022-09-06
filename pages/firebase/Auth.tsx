import { useState } from "react"
import firebase from "./config"
import usuario from "./model/usuario"
import { Console } from "console"

export  interface auth{
    usuario? :usuario
    logingoogle?:()=>Promise<void>

}




const usuario= await firebase.get.token
 export async function authprovider(){
    const [usuario,setusuario]=useState<usuario>()
    
 return{
      
uuid:firebase.usuario.uuid,
nome:firebase.usuario.displayname,
email:firebase.email,
provedor:firebase.usuario.providerdata[0],
imagemurl:firebase.usuario.photourl
     
     }
      // semi pronto
    }   
 
    
    
 


	
  

    
    
     








    
