import { createStore } from 'vuex'

export default createStore({
  state: {
    car: {
      items: [],
  },
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('car')) {
        state.car = JSON.parse(localStorage.getItem('car'))
      } else {
        localStorage.setItem('car', JSON.stringify(state.car))
      }
    },
        addToCar(state, item) {
      const exists = state.car.items.filter(i => i.product.id === item.product.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.car.items.push(item)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
  },
  actions: {
  },
  modules: {
  }
})
