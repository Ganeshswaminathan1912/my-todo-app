import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import TodoForm from './components/TodoForm';
   import TodoList from './components/TodoList';

   function App() {
     const [todos, setTodos] = useState([]);

     useEffect(() => {
       const fetchTodos = async () => {
         const response = await axios.get('/api/todos');
         setTodos(response.data);
       };
       fetchTodos();
     }, []);

     const handleAddTodo = (newTodo) => {
       setTodos([...todos, newTodo]);
     };

     return (
       <div className="App">
         <h1>Todo App</h1>
         <TodoForm onAddTodo={handleAddTodo} />
         <TodoList todos={todos} /> 
       </div>
     );
   }

   export default App;