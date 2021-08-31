import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import UserTable from "./components/UserTable";
import AddUserForm from "./components/addUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const userData = [
    { id: 1, username: "waqas", email: "abc@gmail.com" },
    { id: 2, username: "Ali", email: "123@gmail.com" },
    { id: 3, username: "Bilal", email: "xyz@gmail.com" },
  ];
  const [users, setUsers] = useState(userData);

  // add data into the table
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)); //return the array element which are not equal to this id
    setEditing(false);
  };

  // Edit a user
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, username: "", email: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, username: user.username, email: user.email });
  };

  const updateUser = (id, updatedUser) => {

    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // console.log(users)
  return (
    
    <div className="container">
      <h1 >CRUD APP</h1>
      <div className="left">
        
          {editing ? (
            <div>
              <h4 style={{textAlign:'center', color:"orange", margin:'10px,'}}>Edit user</h4>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            
            <div>
              <h4 style={{textAlign:'center', color:"orange"}}>Add user</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
    
      </div>  
        <div className="right">
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
    
    </div>
  
  );
}

export default App;
