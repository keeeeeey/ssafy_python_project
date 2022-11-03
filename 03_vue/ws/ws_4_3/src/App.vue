<template>
  <div id="app">
    <h1>SSAFY 예약 시스템</h1>
    <div class="container">
      <div class="left">
        <Timetable @from-timetable="fromTimetable"/>
      </div>
      <div class="right">
        <Mylist :my-teacher="myTeacher" :reservation="reservation"/>
      </div>
    </div>
  </div>
</template>

<script>
import Timetable from '@/components/Timetable'
import Mylist from '@/components/Mylist'

export default {
  name: 'App',
  data: function () {
    return {
      myTeacher: "",
      reservation: [],
    }
  },
  components: {
    Timetable,
    Mylist,
  },
  methods: {
    fromTimetable(t, r) {
      this.myTeacher = t
      this.reservation = r
    }
  }
}
</script>

<style>
#app {
  font-family: Noto Sans Korean;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
}

.left {
  width: 450px;
}

.right {
  width: 450px;
  background-color: lightblue;
}
</style>
