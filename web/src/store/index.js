import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const cartItems = window.localStorage.getItem('cartItems');
const cartItemCount = window.localStorage.getItem('cartItemCount');



export default new Vuex.Store({

  state: {
    count: 0,
    cartItemCount: cartItemCount ? parseInt(cartItemCount) : 0,
    cartItems: cartItems ? JSON.parse(cartItems) : {},
    totalPrice: 0,
  },
  mutations: {
    saveCart(state) {
      window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      window.localStorage.setItem('cartItemCount', state.cartItemCount);
    },


    increment(state) {
      state.count++
    },
    addToCart(state, items) {


     

      items = {
        ...items,
        quantity: 1
      };

  

      if (state.cartItems.length >=  0) {
        var bool = state.cartItems.some(
          i => i.id == items.id,
          console.log(bool)
        );
        if (bool == true) {
          var itemsIndex = state.cartItems.findIndex(
            el => el.id == items.id
          );
          state.cartItems[itemsIndex]["quantity"] += 1;

        } else {
          state.cartItems.push(items);
        }
      } 
      state.cartItemCount++
      this.commit('saveCart');
      console.log(items.title)
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
          this.commit('saveCart');
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
    // increment: (context, ) => {
    //   setTimeout(() => {
    //     context.commit('increment')
    //   }, 1000)
    // },
  },
  getters: {

  }
})