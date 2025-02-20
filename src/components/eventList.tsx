type EventListProps = {
    events: { title: string, id: string, date: string, location: string }[];
    handleDelete: (id: string) => void;
}

export function EventList({ events, handleDelete }: EventListProps) {
    return (
        <div>
            {events.length === 0 && <h3>No Content</h3>}
            {events.map((event) => (
                <div key={event.id}>
                    <h1>{event.title}</h1>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <button onClick={() => handleDelete(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}