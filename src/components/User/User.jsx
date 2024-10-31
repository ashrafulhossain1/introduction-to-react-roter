import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user
    const userStyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '10px'
    }


    return (
        <div style={userStyle}>
            <h3> {name} </h3>
            <p>Email: {email}</p>
            <p>Phone:  {phone}</p>
            <Link to={`/user/${id}`}>Post Details</Link>
            <Link to={`/user/${id}`}>
            <button>Show Details</button></Link>
        </div>
    );
};

export default User;