const jwt = require("jsonwebtoken");
// genrate , decode and verify
const value = {
    name : "Chetas",
    accountNumber : 12341234
}

//jwt -> sign and not generate
const token = jwt.sign(value,"secret");

// this token has been generated using this secert , and hence this token can only be verified using this secert
console.log(token);

// this is ur cheque book ->token-> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hldGFzIiwiYWNjb3VudE51bWJlciI6MTIzNDEyMzQsImlhdCI6MTcxOTMyNzQ2N30.0FSfSgjLZZvwtZf0Typp0OVBvSi4FOFORTVJLvjtJcs

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hldGFzIiwiYWNjb3VudE51bWJlciI6MTIzNDEyMzQsImlhdCI6MTcxOTMyNzQ2N30.0FSfSgjLZZvwtZf0Typp0OVBvSi4FOFORTVJLvjtJcs","secert");
console.log(verifiedValue);