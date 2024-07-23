import React from 'react';

const TaskList = ({ tasks, completeTask, deleteTask, completed }) => {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className={`task ${completed ? 'completed' : ''}`}>
                    {!completed && <input type="checkbox" onChange={() => completeTask(task.id)} />}
                    <span>{task.text}</span>
                    {!completed && <button onClick={() => deleteTask(task.id)}>삭제</button>}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
