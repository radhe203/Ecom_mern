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
        old_price:req.body.old_price
    })
    console.log(Product)
    await product.save()
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name
    })
}



async function RemoveProduct(req,res,next){
    await Product.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name
    })
}


async function AllProduct(req,res,next){
    const All_product = await Product.find({});
    console.log('All product fetched')
    res.send(All_product)
}








module.exports = {AddProduct,RemoveProduct,AllProduct};