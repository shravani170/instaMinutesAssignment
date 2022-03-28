const eventModel = require('../models/eventModel')
const schedule = require('node-schedule');


const createEvent = async function (req, res) {
    try{

        let body = req.body;
        let date=req.body.dateTime
        let createdData = await eventModel.create(body);
       
        res.status(201).send({status: true, data:createdData })

    }
    catch(err){

        res.status(500).send({msg: err.message})

    }
}



 const triggerEvent = async function (req, res) 
{
    try{
    var textParams = req.query.text;
   

    let textData= await eventModel.findOne({text:textParams})
    console.log(textData)
    for(let i=0;i<textData.event.length;i++){
        if(textData.event[i].text==textParams){
       let date=textData.event[i].dateTime
       console.log(date)
    //let eventDate = await eventModel.findOne({dateTime:date})
    let job = schedule.scheduleJob(date, function (textParams,textData){
        console.log(textParams)
        console.log(textData)
       if(textParams){
                //for(let i=0;i<event.length)
                for(let i=0;i<textData.event.length;i++){
                var lengthOfText=textData.event[i].text.length
                console.log(lengthOfText)
                var stringTex=textData.event[i].text
            
                let reverceText=stringTex.reverce()
                setTimeout(() => {
                    console.log(`${lengthOfText}`);
                  console.log(`${reverceText}`);
                  },lengthOfText*1000 );
                res.status(201).send({status:true,reverceText})
                }
        }else {
            res.status(400).send({ status: false, msg: "request body must contain text" })
        }
        // setTimeout(function trigger(lengthOfText) {
   
        // }, lengthOfText*1000)
        
 });

}  
   
      }
  }
catch (error) {
    res.status(500).send({status: false, message: error.message});
}
}

module.exports.createEvent = createEvent;
module.exports.triggerEvent  = triggerEvent;
