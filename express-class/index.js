const express = require("express");
const app = express();

// function sum(n){
//     let ans = 0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }return ans;
// }

// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi ur ans is "+ans);
//     res.send("hi there");
// })

var users = [{
    name:'John',
    kidneys:[{
        healthy:true
    },{
        healthy:false
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
    const johnKidney = users[0].kidneys;
    const numberOfkidneys = johnKidney.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfkidneys;i++){
        if(johnKidney[i].healthy) numberOfHealthyKidneys++;
    }
    const numberOfUnhealthyKidneys = numberOfkidneys-numberOfHealthyKidneys;
    // console.log(johnKidney);
    res.json({
        numberOfkidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy:isHealthy})
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/",function(req,res){
    // if atleast one unhealthy kidney there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidney = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({healthy:true})
        }
    }users[0].kidneys = newKidney;
    res.json({
        msg:"Done"
    })
    }else{
        // res.sendStatus(411);
        res.status(411).json({
            msg:"You have no unhealthy kidneys"
        });
    }    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney =false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }return atleastOneUnhealthyKidney;
}

app.listen(3000)