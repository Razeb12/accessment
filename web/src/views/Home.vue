<template>
  <div>
    <div class="tw-max-w-2xl tw-mx-auto tw-py-16 tw-px-4 sm:tw-py-24 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
       <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
      <h2 class="sr-only tw-text-2xl tw-font-bold ">All Products</h2>

      <div class="tw-grid tw-grid-cols-1 tw-mt-8 tw-gap-y-10 sm:grid-cols-2 tw-gap-x-6 lg:tw-grid-cols-3 xl:tw-grid-cols-4 xl:tw-gap-x-8">
       
        <a v-for="product in products" :key="product.id"  class="group" >
           <router-link :to="{ name: 'Product', params: { id: product._id }}">
          <div class="tw-w-full tw-aspect-w-1 tw-aspect-h-1 tw-bg-gray-200 tw-rounded-lg tw-overflow-hidden xl:tw-aspect-w-7 xl:tw-aspect-h-8">
            
            <img :src="product.image" alt="" class="tw-w-full tw-h-64 tw-object-center tw-object-cover group-hover:tw-opacity-75" />
          
          </div>
          <h3 class="tw-mt-4 tw-text-center tw-text-lg tw-text-gray-700">
            {{ product.title }}
          </h3>
       
          <h3 class="tw-mt-2 tw-text-center tw-text-md tw-text-gray-700">
            ${{ product.price }}
          </h3>
          <!-- <p class="tw-mt-1 tw-text-lg tw-font-medium tw-text-gray-900">
            {{ product.price }}
          </p> -->
             </router-link>
        </a>
       
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api";
export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    this.products = await API.getAllProduct();
  },
};
</script>