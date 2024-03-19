import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="User Profile"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
