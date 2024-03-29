import axios from "axios";
const url = "/api/product";

export default class API {
    // get all the  Product from the server
    static async getAllProduct() {
        const res = await axios.get(url);
        return res.data;
    }
    // get all the  product from the server
    static async getProductByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    //  insert product in the database
    static async addProduct(product) {
        const res = await axios.post(url, product);
        return res.data;
    }
    // get update product into the database
    static async updateProduct(id, product) {
        const res = await axios.patch(`${url}/${id}`, product);
        return res.data;
    }
    // to delete a product
    static async deleteProduct(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}