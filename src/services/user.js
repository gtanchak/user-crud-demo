import axios from 'axios'

export const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`) // Replace with your API URL
    return data
}

// DELETE: Delete user by ID
export const deleteUser = async (userId) => {
    const { data } = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/users/${userId}`
    )
    return data
}

// PUT: Update existing user
export const updateUser = async (user) => {
    const { data } = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/users/${user._id}`,
        user
    )
    return data
}

// POST: Create new user
export const createUser = async (user) => {
    const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users`,
        user
    )
    return data
}
