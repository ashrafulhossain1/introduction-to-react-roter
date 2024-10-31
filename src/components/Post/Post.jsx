import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, id, } = post;
    const navigate = useNavigate()

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '10px'
    }
    const handleShowDetails= ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>post of ID {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>
                    Show Details
                </button>
            </Link>
            <button onClick={handleShowDetails}>| Click to see details |</button>
        </div>
    );
};

export default Post;