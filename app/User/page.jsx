"use client";

import { useState } from "react";

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="user">
      <h2>Click To Find Users</h2><br/>
      <button className="button" onClick={fetchUsers}>
        {loading ? "Loading..." : "Get Users"}
      </button>

      <ul className="ul">
        {userData.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
