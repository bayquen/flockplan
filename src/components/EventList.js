/*
 Author:            Brandon Bayquen
 Last modified:     August 2025
 Description:       "Component to showcase list of available (or completed) events in cards on FlockPlan"
*/

// import './EventList.css'
import EventCard from './EventCard';

export default function EventList( { events, onDelete, onEdit }) {
    if (events.length === 0) {
        return (
            <div className="event-list-empty">
                <p>Hmm...no events yet. Create your first event!</p>
            </div>
        );
    }

    return (
        <div className="event-list">
            <h2>Your Events ({events.length})</h2>
            <div className="events-grid">
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
}