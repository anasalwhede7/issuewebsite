import React from "react";

const List = ({ tasks }) => {
    return (
        <div className="max-w-xl mx-auto mt-8">
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500">No tasks available. Add a task to get started!</p>
            ) : (
                <ul className="tasks-list space-y-4">
                    {tasks.map((task) => (
                        <li
                            className="task-list-item p-4 bg-white shadow-md border-b border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-300"
                            key={task.id}
                        >
                            <h3 className="text-lg font-semibold text-center text-gray-800">{task.title}</h3>
                            <p className="text-gray-600 text-center">{task.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;
