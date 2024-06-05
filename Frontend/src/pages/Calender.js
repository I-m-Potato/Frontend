import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // 추가
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import character from '../images/character.png';

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
`;

const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

const DefaultPotatoImage = styled.img`
  display: block;
  margin: 0px auto;
  width: 70px;
  height: auto;
`;

const CalendarComponent = () => {
  const navigate = useNavigate();

  const handleDateClick = (info) => {
    console.log('Date clicked:', info.dateStr);
    navigate(`/calender/modal`, { state: { date: info.dateStr } });
  };

  return (
    <Container>
      <DefaultPotatoImage src={character} alt="감자 캐릭터" />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin 추가
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
        events={[]} // 여기에 이벤트 데이터를 추가할 수 있습니다.
        dateClick={handleDateClick} // dateClick 이벤트 핸들러를 설정합니다.
      />
    </Container>
  );
};

export default CalendarComponent;
