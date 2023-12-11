const orderM = require("../model/order")
class order{

    static async create(req,res){
        const {username,email,amount,quantity,size,offer} =req.body
        let offer_ ;
        const order_ = await orderM.create({
            username:username,
            email:email,
            amount:amount,
            quantity:quantity,
            size:size,
            offer:offer,
             })

        if(offer == 'facebook'){
            offer_ ='10% off'
        }  else if(offer == 'amazon') {
            offer_ ='20% off'

        }   else if(offer == 'infosys'){
            offer_ ='30% off'

        }else if(offer == 'no'){
            offer_ ='0% off'
        }else {
            offer_ ='No OFFER'
        }
        return res.json({offer:offer_,order_})
    }
}
module.exports = order