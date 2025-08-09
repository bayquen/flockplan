import { useState } from 'react';
// import './EventForm.css';

export default function EventForm( { onSubmit, editingEvent, onCancel }) {
    const [formData, setFormData] = useState({
        title: editingEvent?.title || '',
        date: editingEvent?.date || '',
        time: editingEvent?.time || '',
        location: editingEvent?.location || '',
        status: editingEvent?.status || 'planned'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();    // Prevents default page reload after user's form submission
        if (editingEvent) {
            onSubmit({ ...formData, id: editingEvent.id });
        } else {
            onSubmit({ ...formData, id: Date.now() });
        }
        setFormData({
            title: '',
            date: '',
            time: '',
            location: '',
            status: 'planned',
        });
    }
    
}