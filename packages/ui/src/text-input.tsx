interface PropType{
  placeholder:string;size:string;
  onChange?:any;
}
export function TextInput({placeholder,size,onChange}:PropType){
  return <input onChange={onChange} placeholder={placeholder}  
    style={{
      padding:size==="big"?20:10,
      margin:size==="big" ?20:10,
      borderColor:"black" ,
      borderWidth:1,
    }}>
    </input>
}