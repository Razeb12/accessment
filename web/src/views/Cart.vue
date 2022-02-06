<template>
  <div
    class="
      tw-flex tw-mx-auto tw-flex-col tw-max-w-4xl tw-p-6 tw-space-y-4
      sm:tw-p-10
      tw-bg-coolGray-50 tw-text-coolGray-800
    "
  >
    <div v-if="totalPrice !== 0">
      <h2 class="tw-text-xl tw-font-semibold">Your cart</h2>
      <ul class="tw-flex tw-flex-col tw-divide-y tw-divide-coolGray-300" v-for="items in cartItems"
          :key="items.id">
        <li
          class="
            tw-flex tw-flex-col tw-py-6
            sm:tw-flex-row sm:tw-justify-between
          "
          
        >
          <div class="tw-flex tw-w-full tw-space-x-2 sm:tw-space-x-4">
            <img
              class="
                tw-flex-shrink-0
                tw-object-cover
                tw-w-20
                tw-h-20
                tw-border-transparent
                tw-rounded
                tw-outline-none
                sm:tw-w-32 sm:tw-h-32
                tw-bg-coolGray-500
              "
              :src="items.image"
              alt=""
            />
            <div
              class="tw-flex tw-flex-col tw-justify-between tw-w-full tw-pb-4"
            >
              <div
                class="
                  tw-flex tw-justify-between tw-w-full tw-pb-2 tw-space-x-2
                "
              >
                <div class="tw-space-y-1">
                  <h3
                    class="
                      tw-text-lg tw-font-semibold tw-leading-snug
                      sm:tw-pr-8
                    "
                  >
                    {{ items.title }}
                  </h3>
                  <!-- <p class="tw-text-sm tw-text-coolGray-600">Classic</p> -->
                </div>
                <div class="tw-text-right tw-max-w-md">
                  <p class="tw-text-lg tw-font-semibold">
                    ${{ items.price  }}
                  </p>
                  <div
                    class="
                      tw-flex
                      tw-flex-row
                      tw-h-10
                      tw-w-28
                      tw-rounded-lg
                      tw-relative
                      tw-bg-transparent
                      tw-mt-1
                    "
                  >
                    <button
                      v-on:click="removeItem(item)"
                      data-action="decrement"
                      class="
                        tw-bg-gray-300 tw-text-gray-600
                        hover:tw-text-gray-700 hover:tw-bg-gray-400
                        tw-h-full
                        tw-w-20
                        tw-rounded-l
                        tw-cursor-pointer
                        tw-outline-none
                      "
                    >
                      <span class="tw-m-auto tw-text-2xl tw-font-thin">−</span>
                    </button>
                    <input
                      disabled
                      type="tel"
                      class="
                        focus:tw-outline-none
                        tw-text-center
                        tw-w-full
                        tw-bg-gray-300
                        tw-font-semibold
                        tw-text-md
                        hover:tw-text-black
                        focus:tw-text-black
                        md:tw-text-basecursor-default
                        tw-flex tw-items-center tw-text-gray-700 tw-outline-none
                      "
                      name="custom-input-number"
                      :value="items.quantity"
                    />
                    <button
                      v-on:click="addToCart(item)"
                      class="
                        tw-bg-gray-300 tw-text-gray-600
                        hover:tw-text-gray-700 hover:bg-gray-400
                        tw-h-full tw-w-20 tw-rounded-r tw-cursor-pointer
                      "
                    >
                      <span class="tw-m-auto tw-text-2xl tw-font-thin">+</span>
                    </button>
                  </div>

                  <!-- <button
                  v-on:click="removeItem(items)"
                  class="add"
                  type="button"
                >
                  -
                </button>
                <span class="cart-quantity">{{ items.quantity }}</span>
                <button
                  v-on:click="addToCart(items)"
                  class="remove"
                  type="button"
                >
                  +
                </button> -->
                </div>
              </div>
              <!-- <div class="tw-flex tw-text-sm tw-divide-x">
                <button
                  @click="removeItem(item)"
                  type="button"
                  class="
                    tw-flex tw-items-center tw-px-2 tw-py-1 tw-pl-0 tw-space-x-1
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="tw-w-4 tw-h-4 fill-current"
                  >
                    <path
                      d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"
                    ></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path
                      d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"
                    ></path>
                  </svg>
                  <span>Remove</span>
                </button>
              </div> -->
            </div>
          </div>
        </li>
      </ul>
      <div
        v-show="totalPrice !== 0"
        class="
          tw-space-y-1
          tw-text-right
          tw-flex
          tw-flex-col
          tw-ml-auto
          tw-justify-end
        "
        style="width: 50%"
      >
        <p>
          Total amount:
          <span class="tw-font-semibold">${{ totalPrice }}</span>
        </p>
        <p class="tw-text-sm tw-text-coolGray-600">
          Not including taxes and shipping costs
        </p>
      </div>
      <div class="tw-flex tw-mt-6 tw-justify-end tw-space-x-4">
       <router-link to="/">
        <button
          type="button"
          class="tw-px-6 tw-bg-gray-300
          tw-text-black tw-border-black  tw-py-2 tw-border-4 tw-rounded-md "
        >
          Back
          <span class="sr-only sm:not-sr-only">to shop</span>
        </button>
       </router-link>
        <button
          type="button"
          class="
          tw-bg-black
          tw-text-white
            tw-px-6
            tw-py-2
            tw-border
            tw-rounded-md
            tw-bg-violet-600
            tw-text-coolGray-50
            tw-border-violet-600
          "
        >
          <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>

    <EmptyCart v-else />
  </div>
</template>


 <script>
import EmptyCart from "../views/EmptyCart.vue";

export default {
  data() {
    return {
      item: 0,
      
    };
  },



  components: { EmptyCart },
  methods: {
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>