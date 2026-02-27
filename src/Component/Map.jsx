import React, { useState } from "react";

function Map() {
  const [users, setUsers] = useState([
    { id: 1, name: "Yuvraj" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" }
  ]);

  const removeFirstUser = () => {
    setUsers(users.slice(1));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Using ID as Key</h2>

      <button onClick={removeFirstUser}>
        Remove First User
      </button>

      {users.map((user) => (
        <div key={user.id} style={{ marginTop: "10px" }}>
          <input defaultValue={user.name} />
        </div>
      ))}
    </div>
  );
}

export default Map;