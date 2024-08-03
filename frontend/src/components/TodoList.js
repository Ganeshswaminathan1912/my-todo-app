import React from 'react';

   const TodoList = ({ todos }) => { 
     return (
       <ul>
         {todos.map((todo) => (
           <li key={todo.id}>
             {/* Add checkbox and delete functionality here */}
             {todo.text} 
           </li>
         ))}
       </ul>
     );
   };

   export default TodoList;