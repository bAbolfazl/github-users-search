import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserSingle = () => {
    const [currentUser, setCurrentUser] = useState('')
    const { id } = useParams()
    const { avatar_url, name, bio, location } = currentUser

    useEffect(() => {
        axios.get(`https://api.github.com/users/${id}`)
            .then(res => setCurrentUser(res.data))
            .catch(err => console.log(err.message))
    }, [id])
    console.log(currentUser)
    return (
        <div className="user-single">
            <img src={avatar_url} alt="img" />
            <div>{name}</div>
            <span className="small">{location}</span>
            <p>{bio}</p>
        </div>
    );
};

export default UserSingle;