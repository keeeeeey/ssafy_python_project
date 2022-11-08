<template>
  <div class="size-list-item" @click="select()" :class="{'size-list-item-checked' : isChecked}">
    <span>{{ size.name }}</span>
    <span>{{ size.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  computed: {
    isChecked() {
      const idx = this.$store.state.sizeList.indexOf(this.size)
      return this.$store.state.sizeList[idx].selected
    }
  },
  methods: {
    select() {
      this.$store.commit("updateSizeList", this.size)
    }
  }
}
</script>

<style>
.size-list-item {
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

.size-list-item-checked {
  background-color: green;
  color: white;
}

</style>