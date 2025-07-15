"use client";
import { TextInput } from "@repo/ui/text-input"
export default function(){

  return <div style={{
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"column"
  }}>

    <div>
      CHAT Room 
    </div>
    <div>
      <TextInput onChange={()=>{
        alert("hi")
      }} size="big" placeholder="Chat here"></TextInput>
    </div>

  </div>
}