<template>
  <div class="tw-container tw-px-36 tw-mx-auto">
       <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-data-table
      :headers="headers"
      :items="products"
      :product="routeProduct"
      sort-by="name"
      loading
      loading-text="Loading... Please wait"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      class="elevation-1 tw-mt-20"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-text-field
            v-model="search"
            label="Search "
            class="mx-4"
          ></v-text-field>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <template>
            <router-link to="/add-post">
              <v-btn color="primary" dark class="mb-2"> New Item </v-btn>
            </router-link>
          </template>
        </v-toolbar>
      </template>
      <template v-slot:right>
        <v-icon small class="mr-2" @click="editItem()"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem()"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import API from "../api";
export default {
  data: () => ({
    search: "",

    products: [],
  }),
  async created() {
    this.products = await API.getAllProduct();
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },

    headers() {
      return [
        {
          text: "Names",
          align: "start",
          sortable: false,
          value: "title",
          
          
        },
        {
          text: "Category",
          value: "category",
          filter: (value) => {
            if (!this.category) return true;

            return value < parseInt(this.category);
          },
        },
        { text: "Qty", value: "qty" },
        { text: "Price", value: "price" },
        { text: "Date Created", value: "created" },
      ];
    },
  },

  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value == "string" &&
        value.toString().indexOf(search) !== -1
      );
    },

    routeProduct: function (value) {
      this.$router.push({
        name: "Product",
        params: { id: value._id },
      });
    },
  },
};
</script>