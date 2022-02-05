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
            :src="product.image"
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
              {{ product.title }}
            </h2>
            <!-- <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div> -->
            <span
              class="
                tw-title-font
                tw-mt-5
                tw-font-medium
                tw-text-2xl
                tw-6
                tw-text-gray-900
              "
              >${{ product.price }}</span
            >
            <p class="leading-relaxed tw-mt-6">{{ product.content }}</p>
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
                v-on:click="goToCart()"
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
                v-on:click="addToCart()"
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
                :to="{ name: 'edit-post', params: { id: product._id } }"
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
                :to="{ name: 'edit-post', params: { id: product._id } }"
              >
                <button
                  @click="removePost(product._id)"
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
      product: {},   
         
    };
  },

  async created() {
    const response = await API.getProductByID(this.$route.params.id);
    this.product = response;

    
  },
 

  methods: {
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

    addToCart() {
      // this.$store.commit("addToCart");
      this.$store.dispatch("addToCart", this.product);
     
      // console.log("this.$store", this.$store.state.cartItems);
    },
  },
};
</script>