import React, { useState } from "react";

const JoinRoom = () => {
  const [joinStatus, setJoinStatus] = useState("");
  return (
    <div className="app">
      <div className="login">
        <h2>Join Meeting Room</h2>

        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />

        <select
        // onChange={handleSelectChange}
        >
          <option value="stage">Stage</option>
          <option value="viewer">Viewer</option>
        </select>

        <button
          type="submit"
          //  onClick={handleSubmit}
        >
          {" "}
          Join
        </button>
      </div>
      <div className="status-div">
        <p className="status">{joinStatus}</p>
      </div>
    </div>
  );
};

export default JoinRoom;
