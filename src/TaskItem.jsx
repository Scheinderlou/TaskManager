function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={styles.item}>
      <span
        style={{
          ...styles.text,
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "#EFEFDE",
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>

      <button
        style={styles.deleteBtn}
        onClick={() => onDelete(task.id)}
      >
        🗑️
      </button>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px",
    margin: "6px 0",
    borderRadius: "12px",
    backgroundColor: "#3B3B3B",
  },
  text: {
  cursor: "pointer",
  flex: 1,
  textAlign: "left",
  paddingLeft: "10px", 
},

  deleteBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
};

export default TaskItem;
