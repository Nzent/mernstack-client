
import { notification } from 'antd'
import axios from 'axios'

// express api url
const API_URL = 'http://localhost:5000/users'

// Get all users api call
export const fetchAllUsers = () => axios.get(API_URL)

// Create new user api call
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


// Update existing user api call
export const updateUser = (id, values) => axios.patch(`${API_URL}/${id}`,values)
    .then((res) =>
        res.status === 200 &&
        notification
            .success({
                message: 'Updated !',
                description: 'User updated !',
            })
    )
    .catch((e) =>
        notification
            .error({
                message: 'Error !',
                description: `${e}`,
            })
    )