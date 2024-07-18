import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import character from '../images/character.png';
import useLogin from '../hooks/useLogin';
import {url} from '../apis'

const CalendarComponent = () => {
  useLogin();
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  let [year, setYear] = useState();
  let [month, setMonth] = useState();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (year && month) {
      fetchDiaries(year, month+1);
    }
  }, [year, month]);

  

  const fetchDiaries = async (year, month) => {
    try {
      const response = await axios.get(`${url}/api/month-diary`, {
        params: { id: userId, year, month }
      });
      const mockResponseData = response.data;
      console.log(response.data);
      const daysInMonth = new Date(year, month, 0).getDate();
      const diaries = [];

      for (let day = 1; day <= daysInMonth; day++) {

        //const dateStr = `${String(year)}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        //.toISOString():utc 시간 위의 dateStr은 로컬시간이므로 다르게 나옴 ->utc로 맞춰주기 
        const utcDate= new Date(Date.UTC(year,month-1,day));
        const dateStr=utcDate.toISOString().slice(0,10);
        if (mockResponseData[dateStr]) {
          diaries.push({
            title: '',
            start: dateStr,
            allDay: true,
            extendedProps: { imgSrc: character }
          });
        }
      }

      setEvents(diaries);
    } catch (error) {
      console.error('Error fetching diaries:', error);
    }
  };

  const handleDatesSet = (arg) => {
    setYear(arg.view.currentStart.getUTCFullYear());
    setMonth(arg.view.currentStart.getUTCMonth() + 1);
  };
  
  const handleDateClick = async (info) => {
    try {
      const response = await axios.get(`${url}/api/month-diary`, {
        params: { id: userId, year: info.date.getUTCFullYear(), month: info.date.getUTCMonth() + 1 }
      });
      console.log("info입니다", info);
      const mockResponseData = response.data;
      const diaryExists = mockResponseData[info.dateStr] || false;
      console.log(info.dateStr, diaryExists);
      if (diaryExists) {
        navigate(`/calender/diary/${info.dateStr}`, { state: { date: info.dateStr, diary: true } });
      } else {
        navigate(`/calender/modal/${info.dateStr}`, { state: { date: info.dateStr, diary: true } });
      }
    } catch (error) {
      console.error('Error checking diary existence:', error);
    }
  };
  const handleEventImageClick = (dateStr) => {
    //handleDateClick({ dateStr, date: new Date(dateStr) });
    console.log(dateStr);
    handleDateClick(dateStr);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <EventContent>
        <EventImage
          src={eventInfo.event.extendedProps.imgSrc}
          alt='potatostamp'
          onClick={() => handleEventImageClick(eventInfo.event.startStr)}
        />
      </EventContent>
    );
  };

  return (
    <Container>
      <DefaultPotatoImage src={character} alt="감자 캐릭터" />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate={formattedDate}
        navLinks={true}
        editable={true}
        dayMaxEvents={true}
        height={630}
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prev,next'
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleDateClick}
        datesSet={handleDatesSet}
        eventContent={renderEventContent}
        eventDisplay='block'
      />
    </Container>
  );
};

export default CalendarComponent;

const Container = styled.div`
  width: 370px;
  height: 700px;
  margin: 0 auto;
  font-family: 'BMJua', Arial, sans-serif;
  .fc-day-sun a { color: red; text-decoration: none; }
  .fc-day-sat a { color: blue; text-decoration: none; }
  .fc a { font-size: 15px; }
  .fc { background-color: #F8F7EB; }
  .fc-toolbar-title { font-size: 30px; color: #000000; text-align: center; }
  .fc-view-harness, .fc-daygrid-day, .fc-scrollgrid-sync-inner, .fc-scrollgrid, .fc-daygrid-day-frame { border: none !important; }
  .fc-button { border: none; margin: 10px 1px 0px auto; font-size: 15px !important; padding: 2px 2px !important; }
  .fc-event { background-color: transparent !important; border: none !important; }
`;

const EventContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`;

const EventImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

const DefaultPotatoImage = styled.img`
  display: block;
  margin: 0px auto;
  width: 70px;
  height: auto;
`;
