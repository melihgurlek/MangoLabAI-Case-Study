import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(express.json());

app.use(taskRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
export const listen = (port, callback) => {
  const server = app.listen(port, callback);
  return server;
};