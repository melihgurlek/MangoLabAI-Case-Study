import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
export const listen = (port, callback) => {
  const server = app.listen(port, callback);
  return server;
};