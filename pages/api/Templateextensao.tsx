 export interface Templateextensao{
label:String
valor:any
valormudou:(novovalor:any)=>void
senha:string
tipo :"password"
obrigatorio:Boolean
email:string
}
export default function  Templateextensao( props:Templateextensao){
return <div >
<label>{props.label} <input type="text"value={props.valor}onChange={e=>props.valormudou?.(props.valor)}></input></label>
<label>{props.senha} <input type="password"value={props.senha}onChange={()=>props.valormudou?.(props.valor)}></input></label>
</div>
}