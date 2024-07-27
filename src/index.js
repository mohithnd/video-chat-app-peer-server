const { PeerServer } = require("peer");
const { PORT, PATH_PARAM } = require("./config/server.config");

PeerServer(
  {
    port: PORT,
    path: PATH_PARAM,
  },
  () => {
    console.log(
      `Peer Server Is Running On: http://localhost:${PORT}${PATH_PARAM}`
    );
  }
);
