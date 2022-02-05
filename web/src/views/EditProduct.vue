<template>
 <div class="tw-max-w-2xl tw-mx-auto tw-mt-12">
    <v-row class="">
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit Product</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="updateForm"
            class="pa-10"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="product.title"
              label="Title"
              prepend-icon="mdi-note"
              class="tw-mx-2"
              disabled
            ></v-text-field>
            <v-text-field
              v-model="product.category"
              label="Category"
              prepend-icon="mdi-view-list"
              class="tw-mx-2"
              disabled
            ></v-text-field>
            <v-text-field
              v-model="product.qty"
              label="Quantity"
              prepend-icon="mdi-view-list"
              class="tw-mx-2"
            ></v-text-field>
            <v-text-field
              v-model="product.price"
              label="Price"
              prepend-icon="mdi-view-list"
              class="tw-mx-2"
            ></v-text-field>
            <v-textarea
              label="Content"
              prepend-icon="mdi-note-plus"
              v-model="product.content"
              class="tw-mx-2"
            >
            </v-textarea>
            <v-file-input
              @change="selectFile"
              show
              size
              counter
              multiple
              class="tw-mx-2"
              label="Select Image"
              disabled
            ></v-file-input>
            <v-img :src="`/${product.image}`" width="120"></v-img>
           <div class="tw-pb-8">
               <button
                class="
                  tw-flex
                  tw-mx-auto
                  tw-text-white
                  tw-bg-black
                  tw-border-0
                  tw-py-2
                  tw-mt-6
                  
                  tw-px-6
                  focus:tw-outline-none
                  hover:tw-bg-red-600
                  tw-rounded
                "
              >
                Update Product
              </button>
           </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
 </div>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      rules: [(value) => !!value || "Required."],
      product: {
        title: "",
        category: "",
        content: "",
        image: "",
        qty: "",
        price: "",
      },
      image: "",
    };
  },
  async created() {
    const response = await API.getProductByID(this.$route.params.id);
    this.product = response;
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.product.title);
      formData.append("category", this.product.category);
      formData.append("content", this.product.content);
      formData.append("qty", this.product.qty);
      formData.append("price", this.product.price);
      formData.append("old_image", this.product.image);
      if (this.$refs.form.validate()) {
        const response = await API.updateProduct(this.$route.params.id, formData);
        this.$router.push({
          name: "Home",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>