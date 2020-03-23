/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');

        if (!req.body.username || !req.body.password) return res.badRequest();

        var user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(401).send("User not found");

        const match = await sails.bcrypt.compare(req.body.password, user.password);

        if (!match) return res.status(401).send("Wrong Password");

        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);

            req.session.username = req.body.username;
            req.session.uid = user.id;
            req.session.role = user.role;


            sails.log("Session is ", JSON.stringify(req.session));
            sails.log("[Session] ", req.session);

            if (req.wantsJSON) {
                return res.redirect('/competition/homepage');
                //return res.redirect('/user/homepage');
            }

            //return res.ok("Login successfully.");

        });

    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);
            
            return res.redirect('/user/login')

            //return res.ok("Log out successfully.");


        });
    },

    // action - homepage
    homepage: async function (req, res) {

        return res.view('user/homepage');

    },


    setJudgeScreen: async function (req, res) {

        return res.view('user/setJudgeScreen');

    },

   

    // action - create
    createD1: async function (req, res) {
        
        if (req.method == "GET")
            return res.view('user/d1');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createD2(req.body.User);

        return res.ok("Successfully created!");
    },

    createD2: async function (req, res) {
        
        if (req.method == "GET")
            return res.view('user/d2');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createD2(req.body.User);

        return res.ok("Successfully created!");
    },


    // action - create
    createE1: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/e1');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createE1(req.body.User);

        return res.ok("Successfully created!");
    },

    // action - create
    createE2: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/e2');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createE2(req.body.User);

        return res.ok("Successfully created!");
    },

    // action - create
    createE3: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/e3');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createE3(req.body.User);

        return res.ok("Successfully created!");
    },

    // action - create
    createE4: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/e4');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createE4(req.body.User);

        return res.ok("Successfully created!");
    },

    // action - create
    createE5: async function (req, res) {

        if (req.method == "GET")
            return res.view('user/e5');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        await User.createE5(req.body.User);

        return res.ok("Successfully created!");
    },


};

