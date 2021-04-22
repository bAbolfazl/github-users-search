import Filter from "../../components/fitler/filter.component"
import UsersList from "../../components/usersList/usersList.component"
import UsersProvider from "../../providers/users.provider";

const Index = () => {
    return (
        <div>
            <UsersProvider>
                <Filter />
                <UsersList />
            </UsersProvider>
        </div>
    );
};

export default Index;