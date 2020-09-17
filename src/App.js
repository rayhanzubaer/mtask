import React, {useState} from 'react';

const App = () => {
    const [tasks, setTask] = useState(['Task One', 'Task Two', 'Task Three', 'Task Four']);
    const [input, setInput] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        setTask([...tasks, input]);
        setInput('');
    }

    const onEditButtonClick = (event, index) => {
        const list = tasks.map((task, idx) => {
            if (idx === index) {
                return event.target.value;
            } else {
                return task;
            }
        });
        setTask(list);
    }

    const onDeleteButtonClick = (index) => {
        const updatedTasks = tasks.filter((task, idx) => idx !== index);
        setTask(updatedTasks);
    }

    return (
        <div>
            <h1>Task Manager Application</h1>
            <form onSubmit={addTask}>
                <input value={input} onChange={(event) => setInput(event.target.value)}/>
                <button>Add Task</button>
            </form>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <input value={task} onChange={(event) => onEditButtonClick(event, index)}/>
                            <div>
                                <button onClick={() => onDeleteButtonClick(index)}>DELETE</button>
                            </div>
                            <hr/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;