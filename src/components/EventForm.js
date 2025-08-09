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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingEvent) {
            onSubmit({ ...formData, id: editingEvent.id });
        } else {
            onSubmit({ ...formData, id: Date.now() });
        }
        setFormData({ title: '', date: '', time: '', location: '', status: 'planned' });
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <h2>{editingEvent ? 'Edit Event' : 'Create New Event'}</h2>

            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />

            <input 
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
            />
        </form>
    )

}