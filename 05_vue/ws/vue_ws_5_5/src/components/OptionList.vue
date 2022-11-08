<template>
  <div class="option-list">
    <h2>3. 옵션을 고르세요.</h2>
    <!-- <ul class="option-list">
    </ul> -->
    <OptionListItem
      v-for="(option, index) in optionList"
      :key="index"
      :option=option
    />
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'

export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList() {
      return this.$store.state.optionList
    },
  },
  // methods: {
  //   increase: function () {
  //   },
  //   decrease: function () {
  //   },
  // },
}
</script>

<style>
.option-list {
  width: 280px;
  margin: 0 10px;
  padding: 25px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
}

.option-list > h2 {
  text-align: left;
}
</style>