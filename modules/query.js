const connection = require('./connections')
const { v4: uuidv4 } = require('uuid')


const checkIfUserExist = (phone,email) =>{
  return new Promise ( (resolve,reject) => {
    connection.query(
      `SELECT * FROM customers WHERE email = '${email}' or phone = '${phone}'`,
      function(err, results, fields) {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
    connection.end()
  })
}

const creatingUser = (firstname,othernames,phone,email,age,Time) =>{
  return new Promise ((resolve,reject)=>{
    connection.query(
      `INSERT INTO customers(customer_id,firstname,othernames,phone,email,age,Time_) VALUES('${uuidv4()}','${firstname}','${othernames}','${phone}','${email}','${age}','${Time}')`,
      function(err, results, fields) {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
    connection.end()
  })
}


module.exports = {checkIfUserExist,creatingUser}