// TaskList.jsx
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p style={taskListStyles.noTasks}>No tasks yet.</p>;
  }

  return (
    <div style={taskListStyles.taskList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

const taskListStyles = {
  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  noTasks: {
    textAlign: "center",
    color: "#6c757d",
    fontSize: "16px",
    fontStyle: "italic",
    marginTop: "30px",
  },
};

export default TaskList;
