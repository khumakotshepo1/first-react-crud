//Imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const customerModel = require('./models/customer')

dotenv.config()

//Variables
const app = express()
const port = process.env.PORT
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s5qjs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

//Frontend entrypoint
app.use(express.json())
app.use(cors())

//Database
mongoose.connect(connectionString, {
    useNewUrlParser:true
})

// Send to database
app.post("/insert", async (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const cellphone = req.body.cellphone
    const email = req.body.email

    const newCustomer = new customerModel({firstName: firstName, lastName: lastName, cellphone: cellphone, email: email})

    res.send("New customer added!")

    try {
        await newCustomer.save()
        
    } catch (err) {
        console.log(err)
    }
})

// Fetch data from database
app.get("/read", (req, res) => {
    customerModel.find({},(err, result) => {
        if(err){
            res.send(err)
        }
         res.send(result)
    })
})

// Delete data from database
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    await customerModel.findByIdAndRemove(id).exec()
    res.send("Deleted")
})

//Server entrypoint
app.listen(port, () => {
    console.log(`Server listening on port ${port}......`)
})