export default (users = [], action) => {
    switch (action.type) {
        case "DELETE":
            return users.filter((user) => user._id !== action.payload) // return newly updated post or existing post
        case "UPDATE":
            return users.map((user) => user._id === action.payload._id ? action.payload : user)// return newly updated post or existing post
        case "FETCH_ALL":
            return action.payload
        case "CREATE":
            return [...users, action.payload]
        default:
            return users
    }
}