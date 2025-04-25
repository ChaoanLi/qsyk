// src/components/FullCalendarClient.jsx
import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';



export default function FullCalendarClient() {
    return (
        <div id="calendar" className="max-w-5xl mx-auto mt-8">
            <FullCalendar
                plugins={[dayGridPlugin, iCalendarPlugin]}
                initialView="dayGridMonth"
                events={{
                    url: 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/926aa289-557a-48d2-8b2c-0d5e0d22a47c/cid-28D02E803C316409/calendar.ics',
                    format: 'ics',
                }}
                height="auto"
            />
        </div>
    );
}
