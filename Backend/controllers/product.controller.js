const Product = require("../models/product.models.js");


async function AddProduct(req,res,next){
    let All_product = await Product.find({})
    let id;
    if(All_product.length > 0){
        const last_product = All_product.slice(-1)[0]
        id= last_product.id+1;
    }else{
        id=1
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        userRef:req.body.userRef
    })
    await product.save()

    res.json({
        success:true,
        name:req.body.name
    })
}



async function RemoveProduct(req,res,next){
    if(req.body.id !== req.user.id){
        res.status(402).json({message:"Cant be Removed"})
        return
    }
    await Product.findOneAndDelete({id:req.body.prod_id})
    res.json({
        success:true,
        name:req.body.name
    })
}


async function AllProduct(req,res,next){
    const All_product = await Product.find({});
    res.send(All_product)
}


async function Userproduct(req,res,next){
    if(req.user.id !== req.body.id){
        req.status(401).json({message:"Forbidden 401"})
        return
    }
    const products = await Product.find({userRef:req.body.id})
    res.status(200).json(products)
}





module.exports = {AddProduct,RemoveProduct,AllProduct,Userproduct};