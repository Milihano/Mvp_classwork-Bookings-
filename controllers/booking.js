const queries = require('../modules/query')

const booking = (req,res)=>{

    const { firstname,othernames,phone,email,age,Time } = req.body

    if (!firstname || !othernames || !phone || !email || !age || !Time) {
        res.status(400).json({
            message:"All Fields Are Required"
        })
    }
    try {
        queries.checkIfUserExist(phone,email)
        .then(response =>{
            if (response.length > 0) {
                throw new Error('A USER WITH THIS EMAIL OR PHONE ALREADY EXIST')
            }
        })
        .then(response =>{
           res.status(200).json({
            message:"Created Succesfully"
           })
        })
        .catch(error => {
            console.log(`HERE FOR .CATCH(PROMISE):${error.message}`)
            res.status(400).json({
                status:false,
                message: error.message
            })
        })
        

    } catch (error) {
        console.log(`HERE 2:${error}`)
       res.json({
        message: error
       }) 
    }

}






module.exports = {booking}