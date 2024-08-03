import React, { useState } from 'react';
   import axios from 'axios';

   const TodoForm = ({ onAddTodo }) => {
     const [text, setText] = useState('');

     const handleSubmit = async (e) => {
       e.preventDefault();
       if (text.trim() !== '') {
         const newTodo = await axios.post('/api/todos', { text }); // Send to backend
         onAddTodo(newTodo.data); 
         setText('');
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Add a todo..."
           value={text}
           onChange={(e) => setText(e.target.value)}
         />
         <button type="submit">Add</button>
       </form>
     );
   };

   export default TodoForm;