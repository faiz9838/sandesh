import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>

      {/* Show loading state */}
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <span className="text-white text-lg">Loading users...</span>
        </div>
      ) : (
        <div
          className="py-2 flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(84vh - 10vh)" }}
        >
          {/* Check if users exist */}
          {allUsers.length > 0 ? (
            allUsers.map((user, index) => <User key={index} user={user} />)
          ) : (
            <div className="flex justify-center items-center py-8">
              <span className="text-gray-400">No Users Available</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Users;
