const express=require('express');
const router=express.Router();
const Restaurant=require('../models/restaurantModel')

// post endpoint
router.post('/post',async(req,res)=>{
    try{
        const restaurant=await new Restaurant(req.body);
        restaurant.save()
        return res.status(200).json({message:"Restaurant details saved successfully"})
    

    }catch(err){
        if(err.name==='ValidationError'){
            return res.status(400).json({error:"Validation failed: [filed] is required"})

        }return res.status(500).json({error:"Something went wrong"})

    }
})

// get endpoint by id
router.get('/:id',async(req,res)=>{
    try{
    const restaurant=await Restaurant.findById(req.params.id)
    if(!restaurant){
        return res.status(404).json({error:'Restaurant not found'})
        
    }
    return res.json(restaurant);
}
    catch{
        
        return res.status(500).json({error:'Something not found'})

    }
})

// put endpoint by id
router.put('/:id',async(req,res)=>{
    try{
    const restaurant=await Restaurant.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true

    })
    if(!restaurant){
        return res.status(404).json({error:'Restaurant not found'})
        
    }
    return res.status(200).json({message:'Restaurant details updated successfully!'});
}
    catch{
        
        return res.status(500).json({error:'Something not found'})

    }
})


// delete endpoint using id
router.delete('/:id',async(req,res)=>{
    try{
    const restaurant=await Restaurant.findByIdAndDelete(req.params.id)
    if(!restaurant){
        return res.status(404).json({error:'Restaurant not found'})
        
    }
    return res.status(200).json({message:'Restaurant details deleted successfully!'});
}
    catch{
        
        return res.status(500).json({error:'Something not found'})

    }
})

module.exports=router