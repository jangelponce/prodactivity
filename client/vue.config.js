module.exports = {
  devServer: {
    allowedHosts: [process.env.VUE_CLIENT_DOMAIN],
    public: process.env.VUE_CLIENT_DOMAIN,
    host: "0.0.0.0"
  }
};
