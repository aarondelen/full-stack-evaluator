import { useEffect, useState } from "react";
import api from "./api/axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/api/tasks")
      .then((res) => {
        console.log("API Response:", res.data);
        setTasks(Array.isArray(res.data) ? res.data : []); // safety check
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.isDone ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
