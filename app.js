const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const {collection, codeCollection} = require('./mongo');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'pradnyaisexcellentgirl';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

app.get('/', cors(), (req,res)=> {

});

app.post('/', async(req,res)=> {
    const {email,password} = req.body;

    try{
        const check = await collection.findOne({email : email});
        if(check){
            const passwordCompare = bcrypt.compare(password, check.password);
            if(passwordCompare){
            res.json("exist");
            } else {
                res.json('wrongpassword')
            }
        }
        else{
            res.json("notexist");
        }
    }catch(e){
        res.json('notexist');
    }
})


app.post('/signup', async(req,res)=> {
    const {email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    const data = {
        email : email,
        password : secPass
    }

    try{
        const check = await collection.findOne({email : email});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data])
        }
    }catch(e){
        res.json('notexist');
    }
})

app.post('/submitcode', async (req,res) => {
    const {user,code, language} = req.body;
    const data = {
        user : user,
        language : language,
        code : code,
        result : "executed"
    }

    await codeCollection.insertMany([data])
    res.json('submited');
})

app.listen(8000, () => {
    console.log("Port connected");
})