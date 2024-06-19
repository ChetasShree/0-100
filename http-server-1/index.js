const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//   res.json({
//     name:"chetas",
//     age:21
//   })
// })

app.post('/',(req,res)=>{
    res.send({
        msg:"Hellooo girl"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})