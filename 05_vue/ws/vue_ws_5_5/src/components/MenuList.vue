<template>
  <div class="menu-list">
    <h2>1. 음료를 고르세요.</h2>
    <MenuListItem 
      v-for="(menu, index) in menuList" 
      :key="index" 
      :menu=menu
    />
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem';

export default {
  name: 'MenuList',
  components: {
    MenuListItem,
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
  },
  // methods: {
  //   selectMenu: function () {},
  // },
}
</script>

<style>
  .menu-list {
    width: 280px;
    margin: 0 10px;
    padding: 25px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
  }

  .menu-list > h2 {
    text-align: left;
  }
</style>