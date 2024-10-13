import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
      setLoading(false);
    }
  };

  return (
    <>
      <hr />
      <div className="h-[10vh] flex items-center justify-center bg-transparent">
        <div>
          {loading ? (
            <div className="text-white animate-spin text-4xl">⏳</div> // Show loading spinner while logging out
          ) : (
            <BiLogOutCircle
              className="text-5xl text-white hover:bg-slate-700 hover:text-red-500 duration-300 cursor-pointer rounded-full p-2"
              onClick={handleLogout}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Logout;
