/**
 * AthleteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
// action - transcript    (index page in milestone1)
    transcript: async function (req, res) {

        //var models = await Athlete.find();
        var models = await Athlete.find({
//            limit: 4,
            sort: 'createdAt DESC'
        });


        console.log("req.session.role is ", req.session.role);

        return res.view('athlete/transcript', { athletes: models });

    }, 

};

