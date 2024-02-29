const eventsadmin = require('../../../models/modeladmin/modelevent')

module.exports = (req,res) => {
    
    let eventdata = new eventsadmin ({
        // IDscript: new Date(),
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        eventname: req.body.eventname,
        eventdiscription: req.body.eventdiscription
    }) 
    eventsadmin.saveForm(eventdata,(err) => {
        if(err) console.log(err)   
        res.redirect('/activityAdmin') 
    }) 
};
