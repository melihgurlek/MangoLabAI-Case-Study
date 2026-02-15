import { listen } from './app.js';

const PORT = process.env.PORT || 3000;

const server = listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Either stop it or use another port.`);
    process.exit(1);
  }
  throw err;
});
