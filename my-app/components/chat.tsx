// components/chat.tsx
"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // Adjust import path if necessary
import { Button } from "@/components/ui/button"; // Ensure you have a button component
import { Textarea } from "@/components/ui/textarea"; // Optional: You can use a textarea for multiline input

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage = { sender: "Assistant", text: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Apply color #7EB9B2 to the button */}
        <Button
          className="fixed bottom-5 right-5"
          style={{ backgroundColor: "#7EB9B2", color: "#FFFFFF" }}
        >
          Chat
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-[400px] overflow-y-auto p-4 shadow-lg rounded-lg bg-white">
        <div className="flex flex-col">
          <div className="messages mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender.toLowerCase()}`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
            {loading && (
              <div className="message assistant">Assistant: Typing...</div>
            )}
          </div>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="resize-none mb-2"
          />
          <Button
            onClick={handleSend}
            disabled={loading}
            style={{ backgroundColor: "#7EB9B2", color: "#FFFFFF" }} // Consistent button color for the Send button
          >
            Send
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Chat;
