import taskModel from '../src/models/taskModel.js';

const { createTask, getAllTasks } = taskModel;

const task = createTask('Test task', false);
console.log('Created task:', JSON.stringify(task, null, 2));

// Verify structure
const hasId = typeof task.id === 'string' && task.id.length === 36;
const hasTitle = task.title === 'Test task';
const hasCompleted = task.completed === false;
const hasCreatedAt = typeof task.createdAt === 'string';

console.log('\nValidation:');
console.log('  id (UUID):', hasId ? '✓' : '✗');
console.log('  title:', hasTitle ? '✓' : '✗');
console.log('  completed (default false):', hasCompleted ? '✓' : '✗');
console.log('  createdAt:', hasCreatedAt ? '✓' : '✗');

const all = getAllTasks();
console.log('\nAll tasks count:', all.length);
console.log('All tasks:', JSON.stringify(all, null, 2));
