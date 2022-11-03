<template>
    <div>
        <h2>예약 페이지</h2>
        <h3>선생님 선택</h3>
        <div class="teachers">
        <div id="eric" class="btn" :class="{checked_teacher : eric}" @click="checkTeacher('eric')">Eric</div>
        <div id="tony" class="btn" :class="{checked_teacher : tony}" @click="checkTeacher('tony')">Tony</div>
        </div>
        <hr style="border-top: solid 2px #0f4c81; margin: 20px 65px;">
        <h3>시간 선택</h3>
        <div class="timebox">
            <div class="time" v-for="time, index in times" :key="index" @click="checkedTime(index)" :class="{checked_time : isCheckedTime(index)}">
                {{ time }}
            </div>
        </div>
        <div class="btn" style="margin: 20px auto; padding: 0px 5px;" @click="reserve">예약 확정</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Time-table',
    data: function () {
      return {
        times: [
          "09:00","09:30","10:00","10:30","11:00","11:30",
          "12:00","12:30","13:00","13:30","14:00","14:30",
          "15:00","15:30","16:00","16:30","17:00","17:30",
        ],
        eric: false,
        tony: false,
        myTeacher: "",
        reservation: [],
      }
    },
    methods: {
      checkTeacher(teacher) {
        this.eric = false
        this.tony = false
        if (teacher === "eric") {
          this.eric = true
          this.myTeacher = "Eric"
          this.reservation = []
        } else {
          this.tony = true
          this.myTeacher = "Tony"
          this.reservation = []
        }
      },
  
      checkedTime(index) {
        if (this.myTeacher === "") {
          alert("선생님을 선택해주세요")
          return
        }
  
        if (this.reservation.includes(index)) {
          const idx = this.reservation.indexOf(index)
          this.reservation.splice(idx, 1)
        } else {
          if (this.reservation.length >= 5) {
            alert("5타임까지만 신청할 수 있습니다.")
            return
          }
          this.reservation.push(index)
        }
      },
  
      isCheckedTime(index) {
        if (this.reservation.includes(index)) {
          return true
        } else {
          return false
        }
      },

      reserve() {
        if (this.reservation.length === 0) {
            alert("시간을 선택해 주세요!")
            return
        }

        this.$emit("from-timetable", this.myTeacher, this.reservation)
      }
    }
  }
  </script>
  
  <style>
  .timebox {
    width: 350px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .teachers {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    width: 70px;
    height: 25px;
    border: solid 1px #0f4c81;
    margin: 5px;
  }
  
  #eric:hover {
    background-color: lightblue;
  }
  
  #tony:hover {
    background-color: lightblue;
  }
  
  .checked_teacher {
    background-color: lightblue;
  }
  
  .time {
    width: 50px;
    padding: 3px;
    color: #84898c;
  }
  
  .checked_time {
    color: #0f4c81;
    background-color: lightblue;
  }
  </style>
  