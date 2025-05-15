const express =require('express');
const mongoose =require('mongoose');
const dotenv =require('dotenv');
const routes=require('./routes/restaurantRoutes')

const app=express();
app.use(express.json());
dotenv.config();

// main route
app.get('/',(req,res)=>{
    res.json({message:"welcome to restaurant API"})
})

app.use('/api',routes)


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongo db connected")

}
)

const PORT=process.env.PORT || 8100;


app.listen(process.env.port,()=>console.log(`Server is running on port ${PORT}`))