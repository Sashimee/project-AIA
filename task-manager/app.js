const express = require("express");
const app = express();

const { mongoose } = require("./db/mongoose");

const bodyParser = require("body-parser");
// Load in the mongoose models
const { List, Task } = require("./db/models");

// Load middleware
app.use(bodyParser.json());

// CORS MIDDL
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ROUTE HANDLERS

// LIST ROUTES

// GET /lists
// Purpose: Get all lists
app.get("/lists", (req, res) => {
  // We want to return an array of all the lists in the database
  List.find({}).then(lists => {
    res.send(lists);
  });
});

// POST /lists
// Purpose: Create a list
app.post("/lists", (req, res) => {
  // We want to create a new list and return the new list document back to the user(which includes the id)
  //The list information fields will be passed in via the JSON request body
  let title = req.body.title;
  let newList = new List({
    title
  });
  newList.save().then(listDoc => {
    // the full list document is return (incl. id)
    res.send(listDoc);
  });
});

// PATH /lists/:id
// Purpose: Update a specified list
app.patch("/lists/:id", (req, res) => {
  // We want to update the specified list with the new values specified in the JSON BODY of the request
  List.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
    res.sendStatus(200);
  });
});

// DELETE /lists/:id
// Purpose: Delete a specified list
app.delete("/lists/:id", (req, res) => {
  List.findOneAndRemove({
    _id: req.params.id
  }).then(removeListDoc => {
    res.send(removedListDoc);
  });
});

app.get("/lists/:listId/tasks", (req, res) => {
  // We want to return all tasks that belong to a specific list by ID
  Task.find({
    _listId: req.params.listId
  }).then(tasks => {
    res.send(tasks);
  });
});

// POST /lists/:listId/tasks
// Purpose: Create a new task on a specific list
app.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  });
  newTask.save().then(newTaskDoc => {
    res.send(newTaskDoc);
  });
});

// DELETE /lists/:listId/tasks/:taskId
app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then(removedTaskDoc => {
    res.send(removedTaskDoc);
  });
});

// PATCH /lists/:listId/tasks/:taskId
app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId, _listId: req.params.listId },
    { $set: req.body }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.get("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOne({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then(task => {
    res.send(task);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
