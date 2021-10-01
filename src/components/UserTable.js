import React from "react";
import "../css/UserTable.css"

function UserTable(props) {
  return (
    <div className="userData">
      <h2 style={{margin:"20px", color:"tomato"}}>View User</h2>
      {props.users.length > 0 ? (
      <table >
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
             {/* // check the users length */}
            {props.users.map((user) => (
              <tr key={user.id} style={{}}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit_btn" onClick={()=>{props.editRow(user)}}>Edit</button>
                  <button className="del_btn" onClick={()=>props.deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
          ):(
            <tr>
              <td>
                <h2 style={{color:'white'}}>No user..</h2>
              </td>
            </tr>
          )}
    </div>
  );
}

export default UserTable;
