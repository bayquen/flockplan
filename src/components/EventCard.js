/*
 Author:            Brandon Bayquen
 Last modified:     August 2025
 Description:       "Component that creates a simple card representing an event and its description.
                    Includes info like event name, date & time, location, and status."
*/

// import '.EventCard.css';

export default function EventCard({ event, onDelete, onEdit }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();   // returns a readable Date based on the user's geo-region
    };

    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {formatDate(event.date)}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Status:</strong>
                <span className={`status ${event.status}`}>{event.status}</span>
            </p>
            <div className="event-actions">
                <button onClick={() => onEdit(event.id)} className="edit-btn">
                    Edit
                </button>
                <button onClick={() => onDelete(event.id)} className="delete-btn">
                    Delete
                </button>
            </div>
        </div>
    );
}