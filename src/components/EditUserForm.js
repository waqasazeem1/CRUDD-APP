import React, { useState, useEffect  } from "react";

function EditUserForm(props) {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <button style={{margin:"10px", padding:"5px", borderRadius:"5px"}}>Update user</button>
        <button
        style={{margin:"10px", padding:"5px", borderRadius:"5px"}}
          onClick={() => props.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </button>
      </form>
    </>
  );
}

export default EditUserForm;
