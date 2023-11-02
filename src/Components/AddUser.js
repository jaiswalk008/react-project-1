import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const AddUser =(props) =>{
    const [userName , setUserName] = useState('');
    const [age , setAge] = useState('');
    
    const [showModal, setShowModal] = useState(false);

    const [modalMessage,setModalMessage] = useState('Please enter a valid name and age(non-empty value)');

    const formHandler = (e) =>{
        e.preventDefault();
        const userDetails={
            id:Math.random().toString(),
            username:e.target.username.value,
            age:e.target.age.value
        };
        // console.log(userDetails);
        //condition for checking if user input is not empty
        if(userName.trim().length===0 || age.trim().length===0){
            setShowModal(true);
            return;
        }
        //if age is invalid
        if(age<=0){
            setShowModal(true);
            setModalMessage('Please enter a valid age(>0)');
            return;
        }
        props.onAddUser(userDetails);
        setAge('');
        setUserName('');
    }

    const handleCloseModal = () => {
        setShowModal(false);
        console.log('modal closed')
    };

    return (
        <>
            {showModal && <ErrorMessage title="Invalid input"
             message={modalMessage} onClose={handleCloseModal} />}
            <div style={{border:"2px solid black" , borderRadius:"10px"}}
            className="container p-3 w-50 mt-5">
            
            <form onSubmit={formHandler}>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text"  className="form-control" id="username" name="username"
                value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" name="age"
                value={age} onChange={(e)=> setAge(e.target.value)} ></input>
                <button className="btn btn-primary mt-3 w-100">Add User</button>
            </form>
        </div>
        </>
    )
}
export default AddUser;