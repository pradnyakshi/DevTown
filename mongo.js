const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DevTown").then(() => {
    console.log("MongoDB connected");
}).catch(() => {
    console.log("failed");
})

const LoginSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const CodeSchema = new mongoose.Schema({
    user : {
        type : String,
        require : true
    },
    language : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    }, 
    result : {
        type : String,
        required : true
    }
})

const collection = mongoose.model("collection", LoginSchema);
const codeCollection = mongoose.model('codeCollection',CodeSchema);

module.exports = {collection, codeCollection};