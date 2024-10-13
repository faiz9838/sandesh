import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

import profile from "../../../public/user.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  // Log the user object to check its structure
  console.log(user);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profile} alt="User Profile" />
          </div>
        </div>
        <div>
          {/* Fallback for missing fullname */}
          <h1 className="font-bold text-white">
            {user.fullname ? user.fullname : "Unknown User"}
          </h1>
          {/* Fallback for missing email */}
          <span>{user.email ? user.email : "No Email"}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
