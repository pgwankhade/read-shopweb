// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://shopping:shopping@cluster0.dmlnp.mongodb.net/<dbname>?retryWrites=true&w=majority",
    JWT_SECRET: "priyankawankhade",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/mynameispgwankhade/image/upload",
    STRIPE_SECRET_KEY: "sk_test_51HIa73FNYkhaNC4Gz0dloaY7CWQwQyhbj28jHlm3Po1pevnL3Hln1Dsuq7Ksd99z6trgdPodNOfxL0oQylGCGRR500AviuxMar"
  }
};
