
import { useState } from "react";

// TaskInput Component
function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onAdd(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={taskInputStyles.inputForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a task"
        style={taskInputStyles.input}
      />
      <button
        onClick={handleSubmit}
        style={taskInputStyles.addButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#221B19")} onMouseOut={(e) => (e.target.style.backgroundColor = "#151515")}
      >
        Register
      </button>
    </div>
  );
}
const taskInputStyles = {
  inputForm: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    border: "1px solid #3B3B3B",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  addButton: {
    padding: "12px 20px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.2s",
  },
};

export default TaskInput;