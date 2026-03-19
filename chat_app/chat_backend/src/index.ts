import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

const allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type === "chat") {
      const currentUser = allSockets.find(
        (u) => u.socket === socket
      );

      if (!currentUser) return;

      allSockets.forEach((user) => {
        if (user.room === currentUser.room) {
          user.socket.send(parsedMessage.payload.message);
        }
      });
    }
  });

  socket.on("close", () => {
    // cleanup when user disconnects
    const index = allSockets.findIndex((u) => u.socket === socket);
    if (index !== -1) {
      allSockets.splice(index, 1);
    }
  });
});