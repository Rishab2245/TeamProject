import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';
import './Calendar.css'

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://teammanagement.onrender.com/api/board/calendar/${tododata.id}');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateHover = date => {
    setHoveredDate(date);
  };

  const addEvent = async data => {
    const newEvent = {
      title: data.title,
      start: data.start,
      end: data.end,
    };

    try {
      await axios.post('https://teammanagement.onrender.com/api/board/calendar/${tododata.id}', newEvent);
      fetchData(); 
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  const dayPropGetter = date => {
    
    const isCurrentDate = moment(date).isSame(moment(), 'day');
    return {
      style: {
        border: 'none',
        borderRadius: isCurrentDate ? '50%' : '0',
        backgroundColor: isCurrentDate ? 'blue' : 'white',
        color: 'white',
        padding: '5px',
      },
    }}

  const calendarStyles = {
    background: 'tranparent',
    color: '',
    border: 'none',
    padding:'1rem',


  };

  const eventListStyles = {
    listStyle: 'none',
    padding: 0, 
  };
  const eventItemStyles = {
    marginBottom: '8px',
  };
  return (
    
    <div style={calendarStyles}>
    
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={slotInfo => handleDateHover(slotInfo.start)}
      />

      {hoveredDate && (
        <div>
          <h2>Events on {moment(hoveredDate).format('MMMM D, YYYY')}</h2>
          <ul style={eventListStyles}>
            {events
              .filter(event => moment(event.start).isSame(hoveredDate, 'day'))
              .map(event => (
                <li key={event.id} style={eventItemStyles}>{event.title}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
