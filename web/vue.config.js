module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: "http://localhost:6000"
  },

}
