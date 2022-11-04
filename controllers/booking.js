
const queries = require('../modules/query')




const booking = (req, res) =>{

    console.log(req.body)
    
    const {firstname,othernames,phone,email,age,time} = req.body 

    if (!firstname || !othernames || !phone || !email || !age || !time) {
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
            return queries.creatingUser(firstname,othernames,phone,email,age,time)
        })
        .then(response =>{
           res.status(200).json({
            message:"Created Succesfully"
           })
        })
        .catch(error => {
            console.log(`HERE FOR 2:${error.message}`)
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