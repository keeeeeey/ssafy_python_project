<template>
  <div class="menu-list-item" @click="select()" :class="{'menu-list-item-checked' : isChecked}">
    <img 
      :src="IMG_URL" 
      alt="img_url" 
      class="menu-img"
    >
    <span>{{ menu.title }}</span>
    <span>{{ menu.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  computed: {
    isChecked() {
      const idx = this.$store.state.menuList.indexOf(this.menu)
      return this.$store.state.menuList[idx].selected
    }
  },
  data() {
    return {
      IMG_URL: this.menu.image,
    }
  },
  methods: {
    select() {
      this.$store.commit("updateMenuList", this.menu)
    }
  }
}
</script>

<style>
.menu-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 5px;
  box-sizing: border-box;
}

.menu-list-item-checked {
  background-color: green;
  color: white;
}

.menu-img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 5px 0;
}
</style>