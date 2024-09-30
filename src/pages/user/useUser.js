import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useState } from 'react'
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from '../../services/user.js'

export const useUser = () => {
    const queryClient = useQueryClient()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [editUser, setEditUser] = useState(null)

    const { data: users, isLoading } = useQuery(['users'], getUsers)

    // Mutation to create a new user
    const createUserMutation = useMutation(createUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
    })

    // Mutation to update a user
    const updateUserMutation = useMutation(updateUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
    })

    // Handle form submit
    const handleFormSubmit = (userData) => {
        if (userData._id) {
            // Edit existing user
            updateUserMutation.mutate(userData)
        } else {
            createUserMutation.mutate(userData)
        }
        setIsModalOpen(false) // Close modal after submitting
    }

    // Handle edit button click
    const handleEditClick = (userId) => {
        const userToEdit = users.find((user) => user._id === userId)
        setEditUser(userToEdit)
        setIsModalOpen(true)
    }

    // Mutation to delete a user
    const deleteUserMutation = useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
    })
    // Handle delete button click
    const handleDeleteClick = (userId) => {
        deleteUserMutation.mutate(userId)
    }

    const handleAddUser = () => {
        setEditUser(null)
        setIsModalOpen(true)
    }

    return {
        handleAddUser,
        handleDeleteClick,
        editUser,
        handleEditClick,
        handleFormSubmit,
        isLoading,
        isModalOpen,
        setIsModalOpen,
        users,
    }
}
