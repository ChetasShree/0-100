const express = require('express')
const zod = require('zod')
const app = express()
const port = 3000
app.use(express.json())
const schema = zod.array(zod.number());


// if incase zod u need to validate 
// {
//   email : string => email @ .com
//   password : atleast 8 letters
//   country : "IN" or "US"
// }

// answer:
// const schema = zod.object({
//   email : zod.string().email(),
//   password : zod.string().min(8),
//   country : zod.literal("IN").or(z.literal("US"))
//   kidneys: zod.array(zod.number)
// })
// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//   res.json({
//     name:"chetas",
//     age:21
//   })
// })

// app.post('/',(req,res)=>{
//     res.send({
//         msg:"Hellooo girl"
//     })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// app.get("/health-checkup",function(req,res){
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;
 
//   if(!(username =="chetas" && password =="pass")){
//     res.status(403).json({
//       msg: "User doesnt exist",
//     });
//     return;
//   }

//   if(kidneyId !=1 && kidneyId !=2){
//     res.status(411).json({
//       msg:"wrong inputs",
//     });
//     return;
//   }
//   res.send("your heart is healthy");
// })

app.post("/health-checkup",function(req,res){
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.status(411).json({
      msg:"inputs invalid"
    })
  }else{res.send({response})}
});

// app.use(function(err,req,res,next){
//   // res.json({
//   //   msg:"Sorry something wrong with our server",
//   // })
//   res.status(500).send('An internal server error occurred');
// })

app.listen(3000)