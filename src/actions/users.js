import * as api from '../api'

// Action creators

// Get user action
export const getUsers = () => async (dispatch) => {
    // Backend to redux provider data dispatch function
    try {
        const { data } = await api.fetchAllUsers()
        dispatch({ type: 'FETCH_ALL', payload: data }) //pass the data to redux dispatch
    } catch (error) {
        console.log(error);
    }
}

// Create new user action
export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user)
        dispatch({ type: 'CREATE', payload: data }) //pass the data to redux dispatch
    } catch (error) {
        console.log(error);
    }
}

// Update existing user action
export const updateUser = (id, values) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, values)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

// Delete existing user action
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}