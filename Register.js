import { useState } from "react";
import { register } from "../services/api";

export default function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async () => {
    await register(data);
    alert("Registered successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e)=>setData({...data, username:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setData({...data, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}