import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        } else {
            alert('할 일을 작성해주세요');
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="할 일을 추가해주세요"
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-task-button">+</button>
        </div>
    );
};

export default TaskInput;
