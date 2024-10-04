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
            setFormData(userToEdit)
        } else {
            setFormData(defaultUser)
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
        onClose()
    }

    return { handleSubmit, formData, handleChange }
}
