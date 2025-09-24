function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p style={taskListStyles.noTasks}>No tasks yet.</p>;
  }

  return (
    <div style={taskListStyles.taskList}>
      {tasks.map((task) => (
        <div key={task.id} style={taskListStyles.taskItem}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            style={taskListStyles.checkbox}
          />
          <span
            style={{
              ...taskListStyles.taskText,
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.6 : 1,
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={taskListStyles.deleteButton}
          >
            🗑️
          </button>
        </div>
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
  taskItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    backgroundColor: "#3B3B3B",
    borderRadius: "8px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  taskText: {
    flex: 1,
    fontSize: "16px",
  },
  deleteButton: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontSize: "16px", 
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
