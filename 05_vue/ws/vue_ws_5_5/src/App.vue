<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="container">
      <MenuList/>
      <SizeList/>
      <OptionList/>
    </div>
    <div class="cart-button" @click="addOrder">장바구니 담기</div>
    <OrderList/>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList"
import SizeList from "@/components/SizeList"
import OrderList from "@/components/OrderList"
import OptionList from "@/components/OptionList"

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
  },
  methods: {
    addOrder() {
      this.$store.commit("addOrder")
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 900px;
  margin: 25px auto;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

ul {
  list-style: none;
}

.cart-button {
  width: 900px;
  height: 40px;
  background-color: green;
  color: white;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
