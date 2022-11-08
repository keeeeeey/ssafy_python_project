<template>
  <div class="order-list-container">
    <h2>주문 내역</h2>
    <p>총 {{ totalOrderCount }}건: {{ totalOrderPrice }}</p>
    <ul class="order-list">
      <OrderListItem
        v-for="(order, index) in orderList"
        :key="index"
        :order=order
      />
    </ul>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem"

export default {
  name: 'OrderList',
  components: {
    OrderListItem
  },
  computed: {
    orderList() {
      return this.$store.state.orderList
    },
    totalOrderCount() {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice() {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
.order-list-container {
  width: 900px;
  margin: 25px auto;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: whitesmoke;
  text-align: left;
}

.order-list-container > p {
  margin: 10px 0;
}
</style>