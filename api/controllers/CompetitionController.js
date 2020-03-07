/**
 * CompetitionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // action - create
  create: async function (req, res) {

    if (req.method == "GET")
        return res.view('competition/create');

    if (!req.body.Competition)
        return res.badRequest("Form-data not received.");

    await Competition.create(req.body.Competition);
    



    return res.redirect("/competition/create/");
},


    // action - details
    details: async function (req, res) {

        var model = await Competition.findOne(req.params.id)     //.populate('buildsFor'); // milestone 2 adjusted

        if (!model) return res.notFound();

 
  
        if (req.wantsJSON) {
            return res.json({ 'competition': model });
        } else {
            return res.view("competition/details/", { 'competition': model });
        }

    },

    // action - admin
    admin: async function (req, res) {

        var models = await Competition.find();
        return res.view('competition/admin', { competition: models });

    },

     // json function
     json: async function (req, res) {

        var competitions = await Competition.find();

        return res.json(competitions);
    },

    // action - updateE1
    updateE1: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/updateE1', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({
                e1Score: req.body.Competition.e1Score,
               

                
            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.redirect('/competition/updateE1/6');  // hardcode url id

            //return res.ok("Record updated");
            //req.params.id = req.params.id + 1
            
            
            //res.render('/blogs/' + blog._id, {blog_id: req.params.id});
            //competition = req.body.Competition
            //return res.render('//competition/updateE1/' + competition.id, {competition_id: req.params.id});
            //return res.redirect('/competition/updateE1/%d', req.params.id+1);

        }
    },

      // action - updateE2
      updateE2: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/updateE2', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({
                eScore: req.body.Competition.eScore,
               

                updatedDate: new Date().toLocaleDateString(),
            }).fetch();

            if (models.length == 0) return res.notFound();

            //return res.ok("Record updated");
            //req.params.id = req.params.id + 1
            return res.redirect('/competition/updateE2/43');
  

        }
    },

        // action - updateE3
        updateE3: async function (req, res) {

            if (req.method == "GET") {
    
                var model = await Competition.findOne(req.params.id);
    
                if (!model) return res.notFound();
    
                return res.view('competition/updateE3', { competition: model });
    
            } else {
    
                if (!req.body.Competition)
                    return res.badRequest("Form-data not received.");
    
                var models = await Competition.update(req.params.id).set({
                    eScore: req.body.Competition.eScore,
                   
    
                    updatedDate: new Date().toLocaleDateString(),
                }).fetch();
    
                if (models.length == 0) return res.notFound();
    
                //return res.ok("Record updated");
                //req.params.id = req.params.id + 1
                return res.redirect('/competition/updateE3/43');
        
            }
        },

           // action - updateE4
           updateE4: async function (req, res) {

            if (req.method == "GET") {
    
                var model = await Competition.findOne(req.params.id);
    
                if (!model) return res.notFound();
    
                return res.view('competition/updateE4', { competition: model });
    
            } else {
    
                if (!req.body.Competition)
                    return res.badRequest("Form-data not received.");
    
                var models = await Competition.update(req.params.id).set({
                    eScore: req.body.Competition.eScore,
                   
    
                    updatedDate: new Date().toLocaleDateString(),
                }).fetch();
    
                if (models.length == 0) return res.notFound();
    
                //return res.ok("Record updated");
                //req.params.id = req.params.id + 1
                return res.redirect('/competition/updateE4/43');
      
    
            }
        },

           // action - updateE5
           updateE5: async function (req, res) {

            if (req.method == "GET") {
    
                var model = await Competition.findOne(req.params.id);
    
                if (!model) return res.notFound();
    
                return res.view('competition/updateE5', { competition: model });
    
            } else {
    
                if (!req.body.Competition)
                    return res.badRequest("Form-data not received.");
    
                var models = await Competition.update(req.params.id).set({
                    eScore: req.body.Competition.eScore,
                   
    
                    updatedDate: new Date().toLocaleDateString(),
                }).fetch();
    
                if (models.length == 0) return res.notFound();
    
                //return res.ok("Record updated");
                //req.params.id = req.params.id + 1
                return res.redirect('/competition/updateE5/43');
      
    
            }
        },

           // action - updateD2
           updateD2: async function (req, res) {

            if (req.method == "GET") {
    
                var model = await Competition.findOne(req.params.id);
    
                if (!model) return res.notFound();
    
                return res.view('competition/updateD2', { competition: model });
    
            } else {
    
                if (!req.body.Competition)
                    return res.badRequest("Form-data not received.");
    
                var models = await Competition.update(req.params.id).set({
                    eScore: req.body.Competition.eScore,
                   
    
                    updatedDate: new Date().toLocaleDateString(),
                }).fetch();
    
                if (models.length == 0) return res.notFound();
    
                //return res.ok("Record updated");
                //req.params.id = req.params.id + 1
                return res.redirect('/competition/updateD2/43');
      
    
            }
        },

       








};

