import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css";
import MyAppBar from "../component/appBar";

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");

    const handleAddTask = () => {
        if (title && description) {
            const newTask = { title, description, completed: false };

            axios
                .post("http://localhost:3001/tasks", newTask)
                .then((response) => {
                    setTasks([...tasks, response.data]);
                    Swal.fire({
                        title: "Success!",
                        text: "Task added successfully!",
                        icon: "success"
                    });
                    setTitle("");
                    setDescription("");
                })
                .catch((error) => {
                    console.error("Error sending form data:", error);
                });
        } else {
            Swal.fire({
                title: "ERROR!",
                text: "Please enter both title and description!",
                icon: "error"
            });
        }
    };

    const handleEditTask = (index) => {
        setEditIndex(index);
        setEditTitle(tasks[index].title);
        setEditDescription(tasks[index].description);
    };

    const handleSaveEdit = () => {
        const updatedTask = { ...tasks[editIndex], title: editTitle, description: editDescription };

        axios
            .put(`http://localhost:3001/tasks/${updatedTask.id}`, updatedTask)
            .then((response) => {
                const updatedTasks = tasks.map((task, index) =>
                    index === editIndex ? response.data : task
                );
                setTasks(updatedTasks);
                setEditIndex(null);
                setEditTitle("");
                setEditDescription("");
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            });
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditTitle("");
        setEditDescription("");
    };

    const handleDelete = (index) => {
        const taskToDelete = tasks[index];

        axios
            .delete(`http://localhost:3001/tasks/${taskToDelete.id}`)
            .then(() => {
                const updatedTasks = tasks.filter((_, i) => i !== index);
                setTasks(updatedTasks);
            })
            .catch((error) => {
                console.error("Error deleting task:", error);
            });
    };

    return (
        <div>
            <MyAppBar/>
            <p className="text-2xl font-bold mb-6 text-center">Feel Free to fill Form if you have any solutions</p>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-opacity-85">
                <h1 className="bg-cyan-50">If you have an idea to solve any problem, please add it here ...</h1>

                <div className="mb-4">
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            placeholder="What's the task title?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            placeholder="What's the task description?"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleAddTask}
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                            ADD
                        </button>
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <button
                        className={`py-2 px-4 rounded-md ${!isCompleteScreen ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setIsCompleteScreen(false)}
                    >
                        Todo
                    </button>
                    <button
                        className={`py-2 px-4 rounded-md ${isCompleteScreen ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setIsCompleteScreen(true)}
                    >
                        Completed
                    </button>
                    <button className="py-2 px-4 rounded-md bg-blue-600 text-blue-800 bg-gray-200"><a href="/home">Home</a></button>
                </div>

                <div>
                    {tasks
                        .filter(task => task.completed === isCompleteScreen)
                        .map((task, index) => (
                            <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
                                {editIndex === index ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="flex justify-end space-x-2">
                                            <button onClick={handleSaveEdit} className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Save</button>
                                            <button onClick={handleCancelEdit} className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Cancel</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                        <p className="text-gray-600">{task.description}</p>
                                        <div className="flex justify-end mt-2 space-x-2">
                                            <button onClick={() => handleEditTask(index)} className="py-1 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Edit</button>
                                            <button onClick={() => handleDelete(index)} className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;
