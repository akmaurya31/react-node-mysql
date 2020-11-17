const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const axios = require('axios');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const fname = req.body.fname;
  const mname = req.body.mname;
  const name = req.body.name;
  const income = req.body.income;
  
  const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2FlOTI1NGJjZmJhYWI4ZWQxNTBkOTI0M2NiNmUwOTIwM2E1YzVmMGNlMTMxNDcyNDFhY2JlZDlhNmNiMmZkNWE5Y2QwZmUyYWM0ZTc5ZTMiLCJpYXQiOjE1OTczMjM2NjgsIm5iZiI6MTU5NzMyMzY2OCwiZXhwIjoxNjI4ODU5NjY4LCJzdWIiOiI0NSIsInNjb3BlcyI6W119.oKrfhFvZS5cRFKqMD276l563tRt21eb4CLDdiUfIj9xoXW6lR-w_Y5NNRRFJcVrsBUcBq4SzD9h0rfXdjQGjsOAZY2WLRckzEQ_r2j6uYQmMGsp_OHjHWl_sYw4KMs2tFM8_FxdeMGlLaTcQHux_QbGGZqJOaoJVKd4-YdWx9AEFR4ZvQG10GjrnUAMG1PRH6RE4s3LVRMwso9DoZaZ6Q0GrhNIVAd0AiF9h7vKhTCF3YoIbTMWzwDN8xdBY2nIxddBYBJgxI2JO09o4F0Y9HRyDEbIpNT4py340fyTLI4bPrj_KOpI0wB2eW8cRlgj2Z7c9Yd2jEhCkZ70cN2kReHARE91IEJHgX5gFjFSGyJAzeh9lKzYsicPAUnVPzCHMO-r1TGsSAGo2Bss4fGQsmRchGupDw3In4-ceqT5ZU_PZADMCVwLyX1vyiaTV7X5opo9z1X4YwZcwAXTJP3b06iDxjslWCLr27U89UVyJNiHDVUywXBV4pTpjF7o0n6o5xuPyiOSMijeM6Phxe-fXEDXhqCxZpeb-3aTsDExYx3lRIg93snV5LNqOG_kFOljLxfi1zNFY4v6cMuGcvIxKLqgw9YEcSdUqAcbN-GOyClM56JBn4bAVsluVLmZcrSTGw4e892gVt364j_TV7u-1z1sLNW7E8TOR9Q5H-Uyf-y8';
  
   const config3 = {
   headers: {
	   "Access-Control-Allow-Origin": "*",
	   'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
	   
	   }
  }   
 
  
  let datap={
      name: "Ragammm123",
      phone: "4634634446346",    
	  email:"fankmmesh@gmail.com",	   
      password : "pass1232",
	  c_password : "pass1232"
    }
  
  
   console.log(' 444444444444444444 ')
  //return;
 axios.post("http://mfprodigy.ga/api/registers",datap,config3).then(res => console.log("the response data is ",res))
    .catch(err => console.error("we have a following error", err));

  console.log(' line no 49')
 
});

/*
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
*/

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
