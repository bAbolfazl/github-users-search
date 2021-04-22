import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    const { login, html_url, avatar_url, id } = user
    console.log(user)
    return (
        <div className="user-item">
            <Link to={`/user/${login}`} >
                <img src={avatar_url} alt="" />
                <div>{login}</div>
            </Link>
        </div>
    );
};

export default UserItem;