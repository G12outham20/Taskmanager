import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks(1, token);
    setTasks(res.data);
  };

  const addTask = async () => {
    await createTask({ title, status: "Pending" }, token);
    loadTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <input placeholder="New Task" onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}