import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,company,website} = user
    return (
        <div>
            <h2>Details about users: {name}</h2>
            <p>{company.name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;