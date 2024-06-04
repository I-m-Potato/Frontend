import React from 'react';
import FullCalendar from '@fullcalendar/react'; // FullCalendar 컴포넌트 가져오기
import dayGridPlugin from '@fullcalendar/daygrid'; // 필요한 플러그인 가져오기
import styled from 'styled-components';


const Container = styled.div`
  width: 370px;
  height: 700px;
  margin: 0 auto;
  font-family: 'BMJua', Arial, sans-serif;

  /* 일요일 날짜 빨간색 */
.fc-day-sun a {
  color: red;
  text-decoration: none;
}

/* 토요일 날짜 파란색 */
.fc-day-sat a {
  color: blue;
  text-decoration: none;
}

.fc a {
  font-size:15px;
}
.fc {
  background-color: #F8F7EB;
  .fc-toolbar-title {
    font-size: 30px;
    color: #000000;
    text-align: center;
  }

  .fc-view-harness {
    border: none !important;
  }

  .fc-daygrid-day {
    width:10px;
    height:10px;
    border: none !important;
  }

  .fc-scrollgrid-sync-inner {
    border: none !important;
  }

  .fc-scrollgrid {
    border: none !important;
  }

  .fc-daygrid-day-frame {
    border: none !important;
  }

  .fc-button {
    border:none;
    margin:10px 1px 0px auto;
    font-size: 15px !important; /* 버튼 글꼴 크기 줄이기 */
    padding: 2px 2px !important; /* 버튼 패딩 줄이기 */
  }
}

`;

/*
const Title = styled.h1`
  color: #716656;
  font-size: 30px;
  margin: 10px auto;
  text-align: center;
`;*/
const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

const DefaultPotatoImage = styled.img`
  display: block;
  margin: 0px auto; // 이미지의 가운데 정렬을 위해 margin 수정
  width: 70px; // 원하는 너비로 설정
  height: auto; // 높이는 자동으로 조정됨
`;

const CalendarComponent = () => {
  return (
    <Container>
        <DefaultPotatoImage src="images/character.png" alt="감자 캐릭터" />
      <FullCalendar // FullCalendar 컴포넌트 추가
        plugins={[dayGridPlugin]} // 사용할 플러그인 지정
        initialView="dayGridMonth" // 초기 뷰 설정
        initialDate={formattedDate} // 초기 날짜 설정
        navLinks={true} // 날짜/주 이름을 클릭하여 뷰 이동 가능 여부
        editable={true} // 이벤트 편집 가능 여부
        dayMaxEvents={true} // 이벤트 수가 많을 때 "더보기" 링크 허용 여부
        height={630}
        width={370}
        headerToolbar={{ // 커스텀 툴바 설정
          left: 'today',
          center: 'title',
          right: 'prev,next'
        }}
      />
    </Container>
  );
};

export default CalendarComponent;
