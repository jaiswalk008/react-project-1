import React from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import { useState } from 'react';
import UserList from './Components/UserList';
function App() {
  const[userList , setUserList] = useState([]);
  const addUserhandler  = (userDetails) =>{
    // console.log(userDetails)
    const updatedUserList =[...userList , userDetails];
    console.log(updatedUserList);
    setUserList(updatedUserList);
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserhandler}/>
      {userList.length>0 ? <UserList userList={userList}/> : <h2>No User to show...</h2>}
    </div>
  );
}

export default App;
