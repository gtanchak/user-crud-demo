import axios from 'axios'

export const getUsers = async () => {
    const { data } = await axios.get('http://localhost:3000/api/users') // Replace with your API URL
    return data
}

// DELETE: Delete user by ID
export const deleteUser = async (userId) => {
    const { data } = await axios.delete(
        `http://localhost:3000/api/users/${userId}`
    )
    return data
}

// PUT: Update existing user
export const updateUser = async (user) => {
    const { data } = await axios.put(
        `http://localhost:3000/api/users/${user._id}`,
        user
    )
    return data
}

// POST: Create new user
export const createUser = async (user) => {
    const { data } = await axios.post('http://localhost:3000/api/users', user)
    return data
}
