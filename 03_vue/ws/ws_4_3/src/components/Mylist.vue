<template>
    <div>
        <h2>상담 신청 현황</h2>
        <h3>상담 선생님</h3>
        <p>성함 : {{ myTeacher }}</p>
        <hr style="border-top: solid 2px #0f4c81; margin: 20px 40px;">
        <h3>예약 현황</h3>
        <hr style="border-top: solid 2px #0f4c81; margin: 20px 40px;">
        <p>시간들 : <span v-for="value, index in reservation" :key="index" class="time" style="color: black;">{{ times[value] }}</span></p>
        <img src="../assets/ssafy-logo.png" alt="ssafy-logo" class="ssafy-logo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'My-list',
    data: function () {
      return {
        times: [
          "09:00","09:30","10:00","10:30","11:00","11:30",
          "12:00","12:30","13:00","13:30","14:00","14:30",
          "15:00","15:30","16:00","16:30","17:00","17:30",
        ],
      }
    },
    props: {
        myTeacher: String,
        reservation: Array,
    }
  }
  </script>
  
  <style>    
  .ssafy-logo {
    margin: 30px 0px;
  }
  </style>
  