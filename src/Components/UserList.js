const UserList = (props) =>{
    return (
        <div style={{border:"2px solid black" , borderRadius:"10px"}}
         className="container mt-5 w-75">
            <ul>
                {props.userList.map((element) => <li className="fw-bold" key={element.id}>{element.username} ( {element.age} years old)</li>)}
            </ul>
        </div>
    )

}
export default UserList;