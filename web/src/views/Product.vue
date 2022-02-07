<template>
  <div>
    <!-- component -->
    <section class="tw-text-gray-700 tw-overflow-hidden tw-bg-white">
      <div class="tw-container tw-px-5 tw-py-24 tw-mx-auto">
        <div class="lg:tw-w-4/5 tw-mx-auto tw-flex tw-flex-wrap">
          <img
            alt="ecommerce"
            class="
              lg:tw-w-1/2
              tw-w-full
              tw-object-cover
              tw-object-center
              tw-rounded
              tw-border
              tw-border-gray-200
            "
            :src="items.image"
          />
          <div
            class="
              lg:tw-w-1/2
              tw-w-full
              lg:tw-pl-10 lg:tw-py-6
              tw-mt-6
              lg:tw-mt-0
            "
          >
            <h2
              class="
                tw-title-font
                tw-text-black
                tw-pb-4
                tw-text-4xl
                tw-tracking-widest
              "
            >
              {{ items.title }}
            </h2>
      
            <span
              class="
                tw-title-font
                tw-mt-5
                tw-font-medium
                tw-text-2xl
                tw-6
                tw-text-gray-900
              "
              >${{ items.price }}</span
            >
            <p class="leading-relaxed tw-mt-6">{{ items.content }}</p>
            <div
              class="
                tw-flex
                tw-mt-6
                tw-items-center
                tw-pb-5
                tw-border-b-2
                tw-border-gray-200
                tw-mb-5
              "
            >
              <button
                v-on:click="goToCart"
                class="
                  tw-flex
                  tw-ml-auto
                  tw-text-white
                  tw-bg-black
                  tw-border-0
                  tw-py-2
                  tw-px-6
                  focus:tw-outline-none
                  hover:tw-bg-red-600
                  tw-rounded
                "
              >
                Go to Cart
              </button>
              <button
                v-on:click="addToCart(items)"
                class="
                  tw-flex
                  tw-ml-auto
                  tw-text-white
                  tw-bg-black
                  tw-border-0
                  tw-py-2
                  tw-px-6
                  focus:tw-outline-none
                  hover:tw-bg-red-600
                  tw-rounded
                "
              >
                Add to Cart
              </button>
            </div>
            <div class="tw-flex tw-justify-end">
              <router-link
                :to="{ name: 'edit-post', params: { id: items._id } }"
              >
                <button
                  class="
                    tw-flex
                    tw-mx-4
                    tw-ml-auto
                    tw-text-white
                    tw-bg-black
                    tw-border-0
                    tw-py-2
                    tw-px-6
                    focus:tw-outline-none
                    hover:tw-bg-red-600
                    tw-rounded
                  "
                >
                  Edit
                </button>
              </router-link>
              <router-link
                :to="{ name: 'edit-post', params: { id: items._id } }"
              >
                <button
                  @click="removePost(items._id)"
                  class="
                    tw-flex
                    tw-ml-auto
                    tw-text-white
                    tw-bg-black
                    tw-border-0
                    tw-py-2
                    tw-px-6
                    focus:tw-outline-none
                    hover:tw-bg-red-600
                    tw-rounded
                  "
                >
                  Delete Product
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import API from "../api";
export default {
  data() {
    return {
      product: this.$route.params.id,
      items: [],
    };
  },

  async mounted() {
    this.fetchProduct();
    this.intervalFetchData();
    // window.onpopstate = function () {
    //   location.reload();
    // };
  },

  // async created() {
  //   var response = await API.getProductByID(this.product);
  //   this.product = response;
  // },

  methods: {
    async fetchProduct() {
      var response = await API.getProductByID(this.product);
      this.items = response;
    },
    intervalFetchData: function () {
      setInterval(() => {
        this.fetchProduct;
      }, 1000);
      console.log(this.product);
    },

    async removePost(id) {
      const response = await API.deleteProduct(id);
      this.$router.push({
        name: "Home",
        params: { message: response.message },
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },

    addToCart(items) {
      this.$store.commit("addToCart", items);
      console.log(this.items)

      // console.log("this.$store", this.$store.state.cartItems);
    },
  },
};
</script>