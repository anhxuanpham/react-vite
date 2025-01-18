import UserTable from "../components/user/user.table.jsx";
import UserForm from "../components/user/user.form.jsx";

const UsersPage = () => {
    return (
        <div style={{padding: '20px'}}>
                <UserForm />
                <UserTable/>
        </div>

    )
}

export default UsersPage;