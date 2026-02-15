import assert from 'assert';
import taskModel from '../src/models/taskModel.js';

const { createTask, getAllTasks } = taskModel;

// Unit test: createTask returns a task with the correct structure
const task = createTask('Buy milk', false);

assert.strictEqual(typeof task.id, 'string', 'id must be a string');
assert.strictEqual(task.id.length, 36, 'id must be a UUID (36 chars)');
assert.strictEqual(task.title, 'Buy milk', 'title must match input');
assert.strictEqual(task.completed, false, 'completed must default to false');
assert.strictEqual(typeof task.createdAt, 'string', 'createdAt must be a string');

// Unit test: getAllTasks returns an array containing the created task
const tasks = getAllTasks();
assert.ok(Array.isArray(tasks), 'getAllTasks must return an array');
assert.ok(tasks.some((t) => t.id === task.id), 'getAllTasks must include the created task');

console.log('All unit tests passed');
