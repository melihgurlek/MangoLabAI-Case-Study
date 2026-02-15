import express from 'express';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);

export default router;
