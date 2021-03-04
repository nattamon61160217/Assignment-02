const express = require('express')
const app = express()

app.use(express.json())

app.get('/books', (req,res) => {
    //input

    //process
   

    //output
   
})

app.post('/books', (req,res) => {
    //input
    let title = req.body.title
    let price = req.body.price
    let unit = req.body.unit
    let isbn = req.body.isbn
    let image = req.body.image
    let bookID = 0
    console.log(`title: ${title}`) 
    console.log(`price: ${price}`)
    console.log(`unit: ${unit}`) 
    console.log(`isbn: ${isbn}`) 
    console.log(`image: ${image}`) 
     
    
    //process
   
    //output
    res.status(201).json(bookID)
})

const port = 3000
app.listen(port,() => console.log(`Server started again at ${port}`))


