import taskModel from '../models/taskModel.js';

const { createTask: createTaskInModel, getAllTasks } = taskModel;

export function createTask(req, res) {
  try {
    const { title, completed } = req.body ?? {};

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'Title is required' });
    }

    const task = createTaskInModel(title.trim(), completed);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export function getTasks(req, res) {
  try {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
