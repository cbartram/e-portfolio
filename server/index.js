exports.handler = function(event, context, callback) {
    const uuid = require('node-uuid');
    const AWS = require('aws-sdk');
    const moment = require('moment');

    //Configure AWS
    AWS.config.update({region:'us-east-1', secretAccessKey: process.env.SEC, accessKeyId:process.env.ID});

    //Init DB Connection
    let dynamodb = new AWS.DynamoDB();

   const id = uuid.v4();
   console.log("Running Lambda Function");	
   
   console.log('EVENT OBJECT -> ', event);
   console.log('Event body Non Parsed Title ->', event.body.title);
   console.log('Event Body Parsed Title ->', JSON.parse(event.body).title);

   let body = JSON.parse(event.body);

    let query = {
        Item: {
            "messageID": {
                S: id
            },
            "title": {
                S: body.title
            },
            "message": {
                S: body.message
            },
            "email": {
                S: body.email
            },
            "timestamp": {
                S: moment().format("YYYY-DD-MM h:mm:ss")
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "Messages"
    };

    console.log('Making Query...', query);
    dynamodb.putItem(query, (err, data) => {
        if(err) {
            console.log("ERROR ->", err);
            console.log("Error Stack ->", err.stack);
            callback(err);
        } else   {
            console.log("Success ->", data);
            callback(null, {success: true});
        }
    });
};