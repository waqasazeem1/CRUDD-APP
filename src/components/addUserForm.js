import React, {useState} from 'react';
import "../css/addUserForm.css";

function AddUserForm(props) {
    const initialFormValue = {id: null, username:'', email:''} //for add a user
    const [user, setUser] = useState(initialFormValue)

    const changeInputHandler = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    // console.log(user)


    return (
    
        <form className="form" onSubmit={(e)=>{
            e.preventDefault();
            if(!user.username || !user.email) return  //I added a small bit of validation to make sure empty values cannot be submitted
             props.addUser(user);
            setUser(initialFormValue)
        }}>
        
        <label>Username:</label>
        <input type="text" value={user.username} placeholder="Enter Username..." name="username" onChange={changeInputHandler} />
        
        <label>Email:</label>
        <input type="email" value={user.email} name="email" placeholder="Enter Email .." onChange={changeInputHandler} />
        <button className="addUser"  >Add User</button>
        </form>
            
    );
}

export default AddUserForm;