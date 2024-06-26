const express = require("express");
const app = express();


function isOldEnough(age){
    if(age>=14) {
        return true;
    }else{
        return false;
    }
}

function isOldEnoughMiddle(req,res,next){
    const age = req.query.age;
    if(age>=14) {
        next();
    }else{
        res.json({
            msg:"Sorry you are not of age yet"
        })
    }
}
app.get("/ride1",isOldEnoughMiddle,function(req,res){
    res.json({
            msg:"You are successfully riden the ride 1"
        })        
})

app.listen(3000);