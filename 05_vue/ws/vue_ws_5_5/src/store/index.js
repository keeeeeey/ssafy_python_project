import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    orderList: [],
    menuList: [
      {
        title: "아메리카노",
        price: 3000,
        selected: false,
        image: "https://source.unsplash.com/featured/?americano",
      },
      {
        title: "라떼",
        price: 4000,
        selected: false,
        image: "https://source.unsplash.com/featured/?latte",
      },
      {
        title: "에스프레소",
        price: 2000,
        selected: false,
        image: "https://source.unsplash.com/featured/?espresso",
      }
    ],
    sizeList: [
      {
        name: "tall",
        price: 0,
        selected: false,
      },
      {
        name: "grande",
        price: 500,
        selected: false,
      },
      {
        name: "venti",
        price: 1000,
        selected: false,
      },
    ],
    optionList: [
      {
        type: "샷",
        price: 500,
        count: 0,
      },
      {
        type: "바닐라 시럽",
        price: 500,
        count: 0,
      },
      {
        type: "카라멜 시럽",
        price: 500,
        count: 0,
      },
    ]
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      let totalPrice = 0
      state.orderList.forEach((order) => {
        totalPrice += order.menu[0].price
        totalPrice += order.size[0].price
        order.options.forEach((option) => {
          totalPrice += option.price * option.count
        })
      })
      return totalPrice
    }
  },
  mutations: {
    addOrder(state) {
      const selectedMenu = state.menuList.filter((menu) => {
        return menu.selected == true
      })

      if (!selectedMenu.length) {
        alert("메뉴를 선택해주세요!")
        return
      }

      const selectedSize = state.sizeList.filter((size) => {
        return size.selected == true
      })

      if (!selectedSize.length) {
        alert("사이즈를 선택해주세요!")
        return
      }

      const selectedOption = state.optionList.filter((option) => {
        return option.count > 0
      })
      state.orderList.push({menu: selectedMenu, size: selectedSize, options: selectedOption})
    },
    updateMenuList(state, selectedMenu) {
      state.menuList = state.menuList.map((menu) => {
        if (menu === selectedMenu) {
          menu.selected = !menu.selected
        } else {
          menu.selected = false
        }
        return menu
      })
    },
    updateSizeList(state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if (size === selectedSize) {
          size.selected = !size.selected
        } else {
          size.selected = false
        }
        return size
      })
    },
    updateOptionList(state, newOption) {
      state.optionList = state.optionList.map((option) => {
        if (option === newOption) {
          option.count = newOption.count
        }
        return option
      })
    }
  },
  actions: {
  },
  modules: {
  }
})