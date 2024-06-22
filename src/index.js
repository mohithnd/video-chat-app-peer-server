const { PeerServer } = require("peer");
const { PORT } = require("./config/server.config");

const peerServer = PeerServer({
  port: PORT,
  path: "/video-chat",
});
