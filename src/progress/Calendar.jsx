// Calendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';


const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://teammanagement.onrender.com/api/board/calendar/65605e42ec5f2bea2e849f82');
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
      await axios.post('your-api-endpoint', newEvent);
      fetchData(); // Fetch updated events
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
    
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
          <ul>
            {events
              .filter(event => moment(event.start).isSame(hoveredDate, 'day'))
              .map(event => (
                <li key={event.id}>{event.title}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
