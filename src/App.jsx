import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div style={appStyles.container}>
      <div style={appStyles.taskContainer}>
        <h1 style={appStyles.title}>Task Manager</h1>
        <TaskInput onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        <div style={appStyles.saveInfo}>
          ✅ Tasks automatically save to local storage
        </div>
      </div>
    </div>
  );
}

const appStyles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: "20px",
    boxSizing: "border-box",
  },
  taskContainer: {
    backgroundColor: "#292929",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: "100%",
    maxWidth: "500px",
    minHeight: "400px",
  },
  title: {
    marginBottom: "20px",
    color: "#fff",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "initial",
  },
  saveInfo: {
    marginTop: "20px",
    padding: "10px",
    fontSize: "16px",
    textAlign: "center",
  },
};
export default App;
