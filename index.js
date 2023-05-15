const express = require('express')
const app = express()
const port = 4000

app.get("/add",(req,res)=>{

    console.log("adduser");
    res.send('Hello World!')
})



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    