import crypto from 'crypto';

const tasks = [];

function createTask(title, completed = false) {
  const task = {
    id: crypto.randomUUID(),
    title,
    completed,
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  return task;
}

function getAllTasks() {
  return [...tasks];
}

export default {
  tasks,
  createTask,
  getAllTasks
};
