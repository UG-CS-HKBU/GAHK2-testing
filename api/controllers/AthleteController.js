/**
 * AthleteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
// action - transcript    
    transcript: async function (req, res) {

        //var models = await Athlete.find();
        var models = await Athlete.find({
//            limit: 1,
//            sort: 'createdAt DESC'
        });


        console.log("req.session.role is ", req.session.role);

        return res.view('athlete/transcript', { athletes: models });

    }, 

};

