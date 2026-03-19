import { useEffect, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hey 👋", sender: "other" },
    { text: "Hello bro!", sender: "me" },
    { text: "Working on WebSockets?", sender: "other" },
  ]);
  const wsRef = useRef();

  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3030");
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "room1",
          },
        }),
      );
    };

    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, { text: event.data, sender: "other" }]);
    };

    ws.onclose = () => {
      console.log("Disconnected");
    };

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message: input,
          },
        }),
      );
    }
    setMessages([...messages, { text: input, sender: "me" }]);

    setInput("");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Chat Room</h1>
        <span className="text-sm text-gray-400">Online</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                msg.sender === "me"
                  ? "bg-blue-600"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800 flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
