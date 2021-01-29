const server = require('./server.js');

const PORT = 1313 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`REI Proxy Server running on localhost:${PORT}`);
});
