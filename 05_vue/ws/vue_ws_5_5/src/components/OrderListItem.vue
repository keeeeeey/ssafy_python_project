<template>
  <li class="order">
    <div class="left">
      <img :src="IMG_URL" alt="order_img">
      <div>
        <div>{{ order.menu[0].title }}</div>
        <div>사이즈: {{ order.size[0].name }}</div>
      </div>
    </div>
    <div class="right">
      <div>가격: {{ totalPrice }}원</div>
      <div>샷 {{ shot }}회 | 바닐라 시럽 {{ vanilla }}회 | 카라멜 시럽 {{ caramel }}회 |</div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  data() {
    return {
      IMG_URL: this.order.menu[0].image,
      shot: this.order.options[0].count,
      vanilla: this.order.options[1].count,
      caramel: this.order.options[2].count
    }
  },
  computed: {
    totalPrice() {
      let totalOptionPrice = 0
      this.order.options.forEach((option) => {
        totalOptionPrice += option.price * option.count
      })
      return this.order.menu[0].price + this.order.size[0].price + totalOptionPrice
    },
  },
}
</script>

<style>
  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8px;
    border-bottom: solid 1px lightgray;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .left > img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
  }
</style>