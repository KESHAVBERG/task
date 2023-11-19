const mongosee = require('mongoose');

exports.connectDB = async ()=>{
    try{
        const connect = await mongosee.connect(process.env.connetion_url);
        console.log("connected");
    }catch(e){
        console.log(e);
    }
}