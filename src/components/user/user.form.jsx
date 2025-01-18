
import { Input, Button } from 'antd';
import {useState} from "react";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleClickBtn = () => {
        console.log(">>>>>>>Check state: ", {fullName, email, password, phoneNumber});
    }

    // console.log(">>>>>>>Check form: ", fullName, email, password, phoneNumber);

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
                        value = {phoneNumber}
                        onChange = {(event) => setPhoneNumber(event.target.value)}
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