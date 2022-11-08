<template>
  <div class="option-list-item">
    <span>{{ option.type }}</span>
    <div class="option-cnt">
      <button class="cnt-btn" id="cnt-minus" @click="decrease">-</button>
      <span>{{ option.count }}</span>
      <button class="cnt-btn" id="cnt-plus" @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      if (this.option.count === 5) {
        alert("수량은 5 미만만 가능합니다!")
        return
      }

      this.option.count += 1
      this.$store.commit("updateOptionList", this.option)
    },
    decrease() {
      if (this.option.count === 0) {
        alert("수량은 0 이상만 가능합니다!")
        return
      }

      this.option.count -= 1
      this.$store.commit("updateOptionList", this.option)
    },
  },
}
</script>

<style>
.option-list-item {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 5px;
  box-sizing: border-box;
}

.cnt-btn {
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border: solid 1px black;
  border-radius: 50%;
}
</style>