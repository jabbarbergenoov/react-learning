import './newForm.css'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

type NewEventFormProps = {
    newEvent: (event: Event) => void;
};

type Event = {
    title: string;
    date: string;
    id: string;
    location: string;
};

function NewEventForm({ newEvent }: NewEventFormProps) {
    const title = useRef<HTMLInputElement>(null);
    const date = useRef<HTMLInputElement>(null);
    const location = useRef<HTMLSelectElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const eventData: Event = {
            title: title.current?.value || '',
            date: date.current?.value || '',
            id: uuidv4(),
            location: location.current?.value || 'kungrad',
        };

        newEvent(eventData);
    }

    function resetInputs() {
        if (title.current) title.current.value = '';
        if (date.current) date.current.value = '';
        if (location.current) location.current.value = 'kungrad';
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" ref={title} />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" ref={date} />
            </label>
            <label>
                <span>Event Location:</span>
                <select ref={location}>
                    <option value="kungrad">Kungrad</option>
                    <option value="tashkent">Tashkent</option>
                </select>
            </label>
            <button type="button" onClick={resetInputs}>Reset Inputs</button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEventForm;
