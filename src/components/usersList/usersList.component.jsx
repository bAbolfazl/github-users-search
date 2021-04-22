import axios from "axios";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/users.provider";
import UserItem from "../userItem/userItem.components";


const UsersList = () => {
    const { filter, users, setUsers, setUsersIsLoading, usersIsLoading } = useContext(UsersContext)

    useEffect(() => {
        // console.log(process.env)

        const getUsers = async () => {
            if (!filter) {
                setUsers([])
                return
            }
            setUsersIsLoading(true)
            const usersRes = await axios.get(
                `https://api.github.com/search/users?q=${filter}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
                // {
                //     headers: {
                //         'User-Agent': 'request',
                //         'aut',
                //     }
                // }
            )
                .catch(err => { console.log('err.message', err.message); })

            setUsersIsLoading(false)

            const users = await usersRes?.data.items
            // debugger;
            setUsers(users, console.log(users))
        }

        getUsers()


    }, [filter])


    return (
        <div className="d-flex align-items-center justify-content-center row">
            {
                !usersIsLoading ?
                    users?.map(user => <UserItem key={user.id} user={user} />)
                    : 'loading...'
            }
        </div>
    );
};

export default UsersList;