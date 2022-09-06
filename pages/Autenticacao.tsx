import { useState } from "react"
import Templateextensao from "./api/Templateextensao"
import { Auth } from "firebase/auth"

export default function  Autenticacao(){

    const [email,setemail]=useState("")
    const [senha,setsenha]=useState("")
    const [modo,setmodo]=useState("")
    return (
 
        <><><div><h1>autenticação</h1><Templateextensao
            label= "email" valor={email} valormudou={setemail} senha={"0123"} tipo={"password"} obrigatorio={true} email={"vinicius@text"}></Templateextensao>
            <label><Templateextensao senha="digite a senha" label={senha} valor={senha} valormudou={function (): void {
            
                { "}"} 
            } } tipo={"password"} obrigatorio={true} email={""}></Templateextensao></label>
            <button onClick={botoes}></button>
        </div></></>
    )
    function botoes (){
        <><button type="submit">enviar</button><button type="reset"></button></>
    }
}





