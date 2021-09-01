
import { notification } from 'antd'
import axios from 'axios'

// express api url
const API_URL = 'http://localhost:5000/users'

// Get all users
export const fetchAllUsers = () => axios.get(API_URL)

// Create new user
export const createUser = (nreUser) => axios.post(API_URL, nreUser)
    .then((res) =>
        res.status === 201 &&
        notification
            .success({
                message: 'Submitted !',
                description: 'Form is submitted !',
            })
    )
    .catch((e) =>
        notification
            .error({
                message: 'Error !',
                description: `${e}`,
            })
    )