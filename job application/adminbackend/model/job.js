var mongoose = require('mongoose')
var schema = mongoose.Schema({
    JobTitle:String,
    Description:String,
    Requirements:String,
    Place:String,
    Salary:Number,
    JobType:String
})
var Jobmodel =  mongoose.model("Jobs", schema);
module.exports=Jobmodel