import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
            setValue(""); // Clear the input field after submitting
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What's the issue?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
};

export default TodoForm;

// import { useOptimistic, useState, useRef } from "react";
// import { deliverMessage } from "./actions.js";

// function Thread({ messages, sendMessage }) {
//   const formRef = useRef();
//   async function formAction(formData) {
//     addOptimisticMessage(formData.get("message"));
//     formRef.current.reset();
//     await sendMessage(formData);
//   }
//   const [optimisticMessages, addOptimisticMessage] = useOptimistic(
//     messages,
//     (state, newMessage) => [
//       ...state,
//       {
//         text: newMessage,
//         sending: true
//       }
//     ]
//   );

//   return (
//     <>
//       {optimisticMessages.map((message, index) => (
//         <div key={index}>
//           {message.text}
//           {!!message.sending && <small> (Sending...)</small>}
//         </div>
//       ))}
//       <form action={formAction} ref={formRef}>
//         <input type="text" name="message" placeholder="Hello!" />
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

// export default function App() {
//   const [messages, setMessages] = useState([
//     { text: "Hello there!", sending: false, key: 1 }
//   ]);
//   async function sendMessage(formData) {
//     const sentMessage = await deliverMessage(formData.get("message"));
//     setMessages([...messages, { text: sentMessage }]);
//   }
//   return <Thread messages={messages} sendMessage={sendMessage} />;
// }
////////////////////////actions.js////////////////////////////////////
// export async function deliverMessage(message) {
//     await new Promise((res) => setTimeout(res, 1000));
//     return message;
//   }

