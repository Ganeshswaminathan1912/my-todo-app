const express = require('express');
   const bodyParser = require('body-parser');
   const cors = require('cors');

   const app = express();
   const port = 5000;

   // Middleware
   app.use(bodyParser.json());
   app.use(cors());

   // Sample Todo Data (replace with database later)
   let todos = [];

   // API Routes
   app.get('/api/todos', (req, res) => {
     res.json(todos);
   });

   app.post('/api/todos', (req, res) => {
     const newTodo = {
       id: Date.now(), // Simple ID generation
       text: req.body.text,
       completed: false
     };
     todos.push(newTodo);
     res.status(201).json(newTodo);
   });

   // Add more routes for updating and deleting todos

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });