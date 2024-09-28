import { useState } from 'react'
import UsersTable from './components/UserTable.jsx'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import UserForm from './components/UserForm.jsx'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from '../../services/user.js'

const UserPage = () => {
    const queryClient = useQueryClient()

    const navigate = useNavigate()
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

    return (
        <section className="container mx-auto">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button
                        className="flex gap-1 hover:text-emerald-500"
                        onClick={() => navigate(-1)}
                    >
                        <IconArrowLeft stroke={2} /> Back
                    </button>

                    <h1 className="text-4xl font-bold my-4 ">User List</h1>
                </div>
                <button
                    onClick={handleAddUser}
                    className=" bg-emerald-500 rounded px-4 py-2 text-primary"
                >
                    Add New User
                </button>
            </header>
            <UsersTable
                users={users}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
                isLoading={isLoading}
            />

            <UserForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                userToEdit={editUser}
                onSubmit={handleFormSubmit}
            />
        </section>
    )
}

export default UserPage
