import { useState } from 'react'
import './App.css'
import { Title } from './components/title.tsx'
import { Modal } from './components/modal.tsx'
import { EventList } from './components/eventList.tsx'
import NewEventForm from './components/NewEventsForm.tsx'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('Bekbolat')
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState<{ title: string; date: string; id: string, location: string }[]>([]);

  function newEvent(event: { title: string, location: string, date: string, id: string }) {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

  const handleDelete = (id: string) => {
    const filteredEvents = events.filter(event => event.id !== id)
    setEvents(filteredEvents)
  }

  function handleClick() {
    setName(prev => (prev === 'Bekbolat' ? 'Another name' : 'Bekbolat'))
  }
  function togleModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <>
      <Title />
      <h1 className='name'>My name is {name}</h1>
      <button onClick={handleClick}>change name</button>
      <br />
      <br />
      {showContent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Show Content</button>}
      {showContent && (
        events.length > 0 ?
          <EventList handleDelete={handleDelete} events={events} />
          : <p>No events available</p>
      )}
      <br />
      <br />
      <button onClick={togleModal}>New Event</button>
      {
        showModal && <Modal closeModal={closeModal} isModeModal={true}>
          <NewEventForm newEvent={newEvent} />
        </Modal >
      }
    </>
  )
}

export default App;