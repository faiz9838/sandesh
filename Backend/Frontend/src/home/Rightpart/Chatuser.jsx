import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

import profile from "../../../public/user.jpg"; // Getting photo from the public folder.

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // Check if selectedConversation exists to avoid errors
  if (!selectedConversation) {
    return (
      <div className="flex items-center justify-center h-[8vh] bg-slate-800">
        <span className="text-gray-400">No conversation selected</span>
      </div>
    );
  }

  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className={`avatar ${getOnlineUsersStatus(selectedConversation._id).toLowerCase()}`}>
          <div className="w-16 rounded-full">
            <img
              src={profile}
              alt={`${selectedConversation.fullname || "User"}'s profile`}
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white">
            {selectedConversation.fullname || "Unknown User"}
          </h1>
          <span className="text-sm text-gray-400">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
