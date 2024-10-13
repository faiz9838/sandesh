import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-300 h-screen flex flex-col">
      {/* Search Bar */}
      <div className="p-3 border-b border-gray-700">
        <Search />
      </div>

      {/* Users List */}
      <div
        className="flex-1 overflow-y-auto py-4 px-4 space-y-4"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>

      {/* Logout Button */}

      <Logout />
    </div>

  );
}

export default Left;
