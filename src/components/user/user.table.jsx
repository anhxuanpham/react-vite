import { Table} from 'antd';
import {fetchAlUserAPI} from "../../services/api.service.js";
import {useState, useEffect} from "react";



const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(()=>{
        console.log("run useEffect");
        loadUser();
    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },

    ];



    const loadUser = async () => {
        console.log(">>>>>Check load user start: ");
        const res = await fetchAlUserAPI()
        console.log(">>>>>Check load user end: ", res.data);
        setDataUser(res.data);

    }
    // loadUser();
    return (

        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={'_id'}
        />

    );

}

export default UserTable;