const formDatas = require('../../../models/modeluser/modeluser')

module.exports = (req,res) => {
    const problem_id = req.params.IDscript;
    
    if (problem_id === 'favicon.ico') {
        return res.status(200).send();
    }

    if (isNaN(problem_id)) {
        return res.status(400).send('Invalid problem ID');
    }

        //console.log(problem_id);
    formDatas.findOne({IDscript:problem_id}).exec((err,doc) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!doc) {
            return res.status(404).send('Problem not found');
        }
        //console.log(doc)
    res.render('problem' ,{problemData:doc})  
    })
}