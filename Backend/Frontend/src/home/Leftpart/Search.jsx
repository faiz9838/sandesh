import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            {/* Search Input */}
            <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center w-full">
              <input
                type="text"
                className="grow outline-none bg-transparent text-white px-4 py-2"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            {/* Search Button */}
            <button
              type="submit"
              className={`text-white text-3xl p-3 bg-gray-700 rounded-full hover:bg-gray-600 duration-300 ${!search ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={!search} // Disable button when search is empty
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
