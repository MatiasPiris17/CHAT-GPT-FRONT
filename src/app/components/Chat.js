"use client";

import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-row max-w-xl px-8 mx-auto">
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.content}</p>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <label>Escribe tu consulta y presiona Enter</label>
        <input
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
