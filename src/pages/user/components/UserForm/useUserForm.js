import { useEffect, useState } from 'react'

const defaultUser = {
    id: null,
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
}

export const useUserForm = ({ userToEdit, onSubmit, onClose }) => {
    const [formData, setFormData] = useState(defaultUser)

    // Update form data when userToEdit changes
    useEffect(() => {
        if (userToEdit) {
            setFormData(userToEdit) // Populate form with userToEdit data
        } else {
            setFormData(defaultUser) // Reset form when userToEdit is null
        }
    }, [userToEdit])

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        onClose() // Close modal after submission
    }

    return { handleSubmit, formData, handleChange }
}
