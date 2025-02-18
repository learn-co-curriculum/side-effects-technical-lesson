
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from "react";

// Replace this with your own API endpoint or leave it as an empty string
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  // State for userName
  const [userName, setUserName] = useState("Guest");

  // State for userData fetched from an API
  const [userData, setUserData] = useState(null);

  // 1. TODO: useEffect to update document title based on userName
  //    - This effect should run whenever 'userName' changes.

  // 2. TODO: useEffect to fetch data from API_URL on component mount
  //    - This effect should only run once when the component first renders.

  // 3. TODO: useEffect to set up a window event listener (e.g., for clicks)
  //    - Return a cleanup function to remove the event listener on unmount.

  return (
    <div style={{ margin: "2rem" }}>
      <h1>Hello, {userName}!</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="username">Update User Name: </label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <h2>User Info</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}

      {/* Add any other UI elements or placeholders here */}
      {/* For example, you might add a button for additional side effects. */}
    </div>
  );
}

export default App;
