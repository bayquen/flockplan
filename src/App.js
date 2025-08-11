import './App.css';
import { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';


export default function App() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleCreateEvent = (eventData) => {
    setEvents([...events, eventData])
    setShowForm(false);
  };

  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map(event =>
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const startEdit = (eventId) => {
    const event = events.find(e => e.id === eventId);
    setEditingEvent(event);
    setShowForm(true);
  }

  const cancelEdit = () => {
    setEditingEvent(null);
    setShowForm(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FlockPlan Event Planner</h1>
        <button
          className="create-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Create Event'}
        </button>
      </header>

      <main className="App-main">
        {showForm && (
          <EventForm 
            onSubmit={editingEvent ? handleEditEvent : handleCreateEvent}
            editingEvent={editingEvent}
            onCancel={cancelEdit}
          />
        )}

        <EventList
          events={events}
          onDelete={handleDeleteEvent}
          onEdit={startEdit}
        />
      </main>
    </div>
  );
}
