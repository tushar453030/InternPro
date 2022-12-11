const mongoose= require('mongoose');
const {Schema} = mongoose;
const FormSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    batch:{
        type: String,
        required: true
    },
    payment:{
        type: Boolean,
        required: true
    },
  });

  module.exports= mongoose.model('form',FormSchema)