import React from 'react';
import Navbar from './Component/navbar/Navbar';
import './App.css'
import Home from './Component/homepage/Home';
import RegistrationForm from './Component/Getbtn/RegistrationForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Regi from './Component/regi/Regi';
//import GoogleCalendar from './Component/dashbord/calender/GoogleCalendar';
// import custCal from './Component/userInput/custCal';
// import { Calendar } from 'react-big-calendar';
import DataFetch from './Component/DataFetch/DataFetch';
//import Calendar from './Component/calendar/CalendarGoogle';
//import CalendarGoogle from './Component/calendar/CalendarGoogle';
//import Mailer from './Component/Mailer/Mailer';
//import { UserProvider } from './UserContext';



function App() {
  return (
    <div className='main'>

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/Regi" element={<Regi />} />
          <Route path="RegistrationForm" element={<RegistrationForm />} />
          <Route path="DataFetch" element={<DataFetch></DataFetch>} />
          {/* <Route path="Calendar" element={<CalendarGoogle />} /> */}
          {/* <Route path="Mailer" element={<Mailer />} /> */}
          {/* <UserProvider path="useUser"element={<></>}></UserProvider> */}
        </Routes>
      </Router>





    </div>
  );
}

export default App;