import { useState } from "react";
import { login } from "../services/api";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const res = await login(data);
    localStorage.setItem("token", res.data);
    alert("Login success");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e)=>setData({...data, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}