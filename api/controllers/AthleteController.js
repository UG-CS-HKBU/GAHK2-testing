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

    // action - details
    details: async function (req, res) {

        var model = await Athlete.findOne(req.params.id)     //.populate('buildsFor'); // milestone 2 adjusted

        if (!model) return res.notFound();

        // milestone 2: 
        //both model (Estate) and thatUser (User) is required.
        // var isRented = false;

        // if (req.session.uid) {
        //     var thatUser = await User.findOne(req.session.uid).populate('rents', {
        //         where: { id: req.params.id },
        //     });

        //     console.log("user is ", thatUser);

        //     if (thatUser.rents.length) {
        //         isRented = true;                                   // OR simply type: if(... && thatUser.rent.length) in details.ejs
        //         //return res.status(409).send("Already added.");   // conflict  (lab6)
        //     }

        //     if (req.wantsJSON) {
        //         return res.json({ 'estate': model });
        //     } else {
        //         return res.view("estate/details", { 'estate': model, 'haveUrented': isRented });

        //     }


        // }
        if (req.wantsJSON) {
            return res.json({ 'athlete': model });
        } else {
            return res.view("athlete/details/", { 'athlete': model });
        }

    },

    // action - admin
    admin: async function (req, res) {

        var models = await Athlete.find();
        return res.view('athlete/admin', { athlete: models });

    },

    // json function
    json: async function (req, res) {

        var athletes = await Athlete.find();

        return res.json(athletes);
    },

    };

