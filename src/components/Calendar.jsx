import React from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase.js';

function Calendar() {

    const [calendarUrl, setCalendarUrl] = React.useState('');

    getDownloadURL(ref(storage, 'documents/calendar.pdf'))
    .then((url) => {
        setCalendarUrl(url.toString());
    })
    .catch((error) => {
        // Handle any errors
    });

  return (
    <div style={{height: '90vh'}}>
        <h1>Calendar</h1>
        <object width="100%" height="100%" data={calendarUrl} type="application/pdf">   </object>
    </div>
  );
}

export default Calendar;
