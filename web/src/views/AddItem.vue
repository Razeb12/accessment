<template>
  <div class="tw-max-w-2xl tw-mx-auto tw-mt-12">
    <v-row class="">
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Post</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-10"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="product.title"
              label="Title"
              prepend-icon="mdi-note"
              :rules="rules"
              class="tw-mx-2"
            ></v-text-field>
            <v-text-field
              v-model="product.category"
              label="Category"
              prepend-icon="mdi-view-list"
              :rules="rules"
              class="tw-mx-2"
            ></v-text-field>
            <v-text-field
              v-model="product.qty"
              label="Quantity"
              prepend-icon="mdi-view-list"
              :rules="rules"
              class="tw-mx-2"
            ></v-text-field>
            <v-text-field
              v-model="product.price"
              label="price"
              prepend-icon="mdi-view-list"
              :rules="rules"
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
              :rules="rules"
              show
              size
              counter
              multiple
              label="Select Image"
              class="tw-mx-2"
            ></v-file-input>
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
                Add Product
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
        qty:"",
        price: "",
      },
      image: "",
    };
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.product.title);
      formData.append("category", this.product.category);
      formData.append("content", this.product.content);
      formData.append("qty", this.product.qty);
      formData.append("price", this.product.price);
      if (this.$refs.form.validate()) {
        const response = await API.addProduct(formData);
        this.$router.push({
          name: "Home",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>