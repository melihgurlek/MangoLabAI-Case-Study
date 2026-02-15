import taskModel from '../models/taskModel.js';

const { createTask: createTaskInModel, getAllTasks } = taskModel;

export function createTask(req, res) {
  const { title, completed } = req.body;
  const task = createTaskInModel(title, completed);
  res.status(201).json(task);
}

export function getTasks(req, res) {
  const tasks = getAllTasks();
  res.status(200).json(tasks);
}
