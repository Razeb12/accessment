import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    cartItemCount: 0,
    cartItems: [],
    totalPrice: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
          let bool = state.cartItems.some(
              i => i.id == item.id
          );
          if (bool == true) {
              let itemIndex = state.cartItems.findIndex(
                  el => el.id == item.id
              );
              state.cartItems[itemIndex]["quantity"] += 1;
          } else {
              state.cartItems.push(item);
          }
      } else {
          state.cartItems.push(item);
      }
      state.cartItemCount++
      console.log(state.cartItems)
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(
          i => i.id == payload.id
        );
        // console.log('bool', bool)
        if (bool) {
          let index = state.cartItems.findIndex(
            el => el.id == payload.id
          );
          //to prevent quantity from being negative
          state.cartItems[index]["quantity"] === 0 ?
            (state.cartItems[index]["quantity"] = 0) :
            (state.cartItems[index]["quantity"] -= 1);
          if (state.cartItems[index]["quantity"] === 0)
            state.cartItems.splice(index, 1)
          if (state.cartItemCount !== 0)
            state.cartItemCount--
        }
      }
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload)
    },
    removeItem: (context, payload) => {
      context.commit('removeItem', payload)
    },
    increment: (context, ) => {
      setTimeout(() => {
        context.commit('increment')
      }, 5000)
    },
  },
  getters: {
   
  }
})