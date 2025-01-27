
import {Input, Button,  notification} from 'antd';
import {useState} from "react";
import {createUserAPI} from "../../services/api.service.js";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const handleClickBtn = async ()  => {

       const res = await createUserAPI(fullName, email, password, phone)
        // debugger
        if (res.data && res.data) {
            notification.success({
                message: 'Create user success',
                description: 'Tạo user thành công!'
            })

        }else {
            notification.error({
                message: 'Create user fail',
                description: JSON.stringify(res.message)
            })
        }

        // console.log(">>>>>>>Check form: ", res.data.data);

    }

    return (
        <div className='user-form' style = {{margin: '20px 0'}}>
            <div style = {{display: 'flex', gap: '15px', flexDirection: 'column', padding: '10px 0'}}>
                <div>
                    <span>FullName</span>
                    <Input
                        value = {fullName}
                        onChange = {(event) => setFullName(event.target.value)}
                        />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value = {email}
                        onChange = {(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value = {password}
                        onChange = {(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input
                        value = {phone}
                        onChange = {(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>
            <div className='button-submit'>
                <Button type = 'primary'
                onClick = {() =>handleClickBtn()}
                >Submit</Button>
            </div>
        </div>
    )
}

export default UserForm;