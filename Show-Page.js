import React, { useEffect, useState } from "react";

export default function ShowPage() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://www.tvmaze.com/api/user/episodes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// return (
//   <div>
//     <h2>Show Page</h2>
//   </div>

// );
