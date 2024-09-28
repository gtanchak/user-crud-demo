import { useState } from 'react'
import UsersTable from './components/UserTable.jsx'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import UserForm from './components/UserForm.jsx'

const UserPage = () => {
    const data = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'Admin',
            status: 'Active',
            created_at: '2023-08-21T14:12:00',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'User',
            status: 'Inactive',
            created_at: '2023-07-15T11:30:45',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            role: 'User',
            status: 'Active',
            created_at: '2023-06-05T09:20:30',
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            role: 'Moderator',
            status: 'Active',
            created_at: '2023-05-10T08:45:00',
        },
        {
            id: 5,
            name: 'Emily Davis',
            email: 'emily.davis@example.com',
            role: 'Admin',
            status: 'Suspended',
            created_at: '2023-04-25T13:50:15',
        },
        {
            id: 6,
            name: 'Michael Wilson',
            email: 'michael.wilson@example.com',
            role: 'User',
            status: 'Active',
            created_at: '2023-03-11T10:15:00',
        },
        {
            id: 7,
            name: 'Sarah Lee',
            email: 'sarah.lee@example.com',
            role: 'Admin',
            status: 'Active',
            created_at: '2023-01-29T07:25:00',
        },
        {
            id: 8,
            name: 'David Martinez',
            email: 'david.martinez@example.com',
            role: 'Moderator',
            status: 'Inactive',
            created_at: '2022-12-30T15:05:00',
        },
        {
            id: 9,
            name: 'Laura Garcia',
            email: 'laura.garcia@example.com',
            role: 'User',
            status: 'Suspended',
            created_at: '2022-11-22T16:20:45',
        },
        {
            id: 10,
            name: 'Chris White',
            email: 'chris.white@example.com',
            role: 'User',
            status: 'Active',
            created_at: '2022-10-11T17:35:00',
        },
    ]

    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [users, setUsers] = useState(data)
    const [editUser, setEditUser] = useState(null)

    // Handle form submit
    const handleFormSubmit = (userData) => {
        if (userData.id) {
            // Edit existing user
            setUsers((prev) =>
                prev.map((user) => (user.id === userData.id ? userData : user))
            )
        } else {
            // Add new user
            const newUser = { ...userData, id: users.length + 1 }
            setUsers((prev) => [...prev, newUser])
        }
        setIsModalOpen(false) // Close modal after submitting
    }

    // Handle edit button click
    const handleEditClick = (userId) => {
        const userToEdit = users.find((user) => user.id === userId)
        setEditUser(userToEdit)
        setIsModalOpen(true)
    }

    // Handle delete button click
    const handleDeleteClick = (userId) => {
        setUsers((prev) => prev.filter((user) => user.id !== userId))
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
