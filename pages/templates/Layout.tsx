import Menulateral from "./Menulateral"
import { home } from "./icones/Icone"
import { logout } from "./icones/Icone"
import Autenticacao from "../Autenticacao"

export default function Layout(){
return(
<div><Menulateral/> {home}{logout} <Autenticacao /></div>)

}