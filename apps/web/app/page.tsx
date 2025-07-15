"use client";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
export default function Home() {
  const router = useRouter();
  return (
    <div style={{height:"100vh" , width:"100vw", backgroundColor:"black",display:"flex",justifyContent:"center",justifyItems:"center",}}>
      <div style= {{margin:"30px"}}>
        <TextInput size="big" placeholder="text">
        </TextInput>

        <button onClick={()=>{
          router.push("/chat/123")
        }}>Submit</button>

      </div>
    </div>
  );
}