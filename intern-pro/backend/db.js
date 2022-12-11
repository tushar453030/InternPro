const mongoose = require('mongoose');
const mongoURI='mongodb+srv://tushar:Mongo4530@ecommerce.efdz0my.mongodb.net/shop?retryWrites=true&w=majority'

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo