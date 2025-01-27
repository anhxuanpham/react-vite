import axios from './axios.customize.js'

const createUserAPI =  (fullName, email, password, phone) => {
    const URL = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
   return axios.post(URL, data)

}





const updateUserAPI =  () => {

}


const fetchAlUserAPI =  () => {
    const URL = '/api/v1/user';

    return axios.get(URL)
}


export {
    createUserAPI, updateUserAPI, fetchAlUserAPI
}