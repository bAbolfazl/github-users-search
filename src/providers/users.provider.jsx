import { createContext, useState } from "react";

export const UsersContext = createContext({
    users: [],
    setUsers: () => { },

    filter: '',
    setFilter: () => { },

    usersIsLoading: false,
    setUsersIsLoading: () => { },
})

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')
    const [usersIsLoading, setUsersIsLoading] = useState(false)

    return (
        <UsersContext.Provider value={{
            filter,
            setFilter,
            users,
            setUsers,
            usersIsLoading,
            setUsersIsLoading
        }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;