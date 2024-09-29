import UsersTable from './components/UserTable.jsx'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import UserForm from './components/UserForm/UserForm.jsx'

import { useUser } from './useUser.js'

const UserPage = () => {
    const {
        handleAddUser,
        handleDeleteClick,
        handleEditClick,
        isLoading,
        isModalOpen,
        handleFormSubmit,
        editUser,
        setIsModalOpen,
    } = useUser()

    const navigate = useNavigate()

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
