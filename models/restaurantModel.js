const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String},
    price:{type:Number,require:true},

})



const restaurantSchema=new mongoose.Schema({
    name:{type:String,require:true},
    location:{type:String,require:true},
    cuisine:{type:String,require:true},
    rating:{type:Number},
    menu:[menuSchema]

})

const Restaurant=mongoose.model('Restaurant',restaurantSchema);
module.exports=Restaurant