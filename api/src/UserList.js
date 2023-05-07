import axios from "axios";
import './App.css'
import { useState, useEffect } from "react";

function UserList() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="user-list">
      <h1>La list</h1>
      <ul>
        {User.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
        }  

export default UserList;

