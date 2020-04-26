/**
 * CompetitionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //socket
    showScore: async function (req, res) {

        return res.view("scoreList/score");

    },

    newConversationReading: async function (req, res) {

        var reading = await BotUsage.create({
            name: "Bot " + Math.floor(Math.random() * 10),
            totalConversation: Math.floor(Math.random() * 20 + 10)
        }).fetch();

        return res.json(reading);

    },

    chatBotUsageStats: async function (req, res) {
        try {

            if (!req.isSocket) {
                console.log('Only a client socket can subscribe');
            }

            // const totalConversation = await CommonService.getQuery('select count(*) from botUsage');

            //const totalConversation = await BotUsage.find();

            sails.sockets.join(req.socket, 'feed');
            console.log('join feed');
            res.send({ success: true });

        } catch (e) {
            res.send({ error: true, message: e.stack });
        }
    },

    // action - create
    create: async function (req, res) {

        if (req.method == "GET")
            return res.view('competition/create');

        if (!req.body.Competition)
            return res.badRequest("Form-data not received.");

        await Competition.create(req.body.Competition);

        return res.redirect("/competition/create/");
    },

    // action - start
    start: async function (req, res) {
        var model = await Competition.findOne(req.params.id).populate('belongsTo');

        //model.startTime = new Date();
        await Competition.update(req.params.id).set({startTime:new Date()}).fetch();
        //return res.view('competition/updateD1/', { 'competition': model.id });
        //return res.redirect('updateD1/17/');
        return res.redirect('/competition/admin/'+model.belongsTo[0].id);
        //return res.redirect('competition/admin/', { 'competition': model });

    },


    // action - admin
    admin: async function (req, res) {

        var model = await Event.findOne(req.params.id).populate('includes');

        //var isStarted = false; 

        return res.view('competition/admin', { 'competition': model.includes });

    },

    // action - chiefJUdge
    chiefJudge: async function (req, res) {

        var model = await Event.findOne(parseInt(req.params.id)).populate('includes');

        return res.view('competition/chiefJudge', { competition: model.includes });

    },

    // json function
    json: async function (req, res) {

        var competitions = await Competition.find();

        return res.json(competitions);
    },

    // action - scoreboard
    scoreboard: async function (req, res) {

        var model = await Competition.findOne(req.params.id); // milestone 2 adjusted

        if (!model) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ 'competition': model });
        } else {
            return res.view("competition/scoreboard/", { 'competition': model });
        }

    },

    // action - ranking
    ranking: async function (req, res) {

        var models = await Competition.find({
            sort: 'totalScore DESC'
            //sort: 'totalScore DESC'
        });

        // Cal avg D and E scores:

        return res.view('competition/ranking', { competition: models });

    },

    // action - homepage (for Admin)
    homepage: async function (req, res) {
        var events = await Event.find();
        return res.view('competition/homepage', { events: events });

    },

    // action - homepageS (for Secretary)
    homepageS: async function (req, res) {
        var events = await Event.find();
        return res.view('competition/homepageS', { events: events });

    },

    // action - homepageC (for Chief_Judge) 
    homepageCJ: async function (req, res) {


        var events = await Event.find();
        return res.view('competition/homepageCJ', { events: events });

    },

    // action - waiting
    waiting: async function (req, res) {
        sails.sockets.join(req.socket, 'feed');
        return res.view('competition/waiting', { competition: models });


    },

    waitingD1: async function (req, res) {
        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateD1/"+model.id)
        }
        
        return res.view('competition/waitingD1');
        
    },
    waitingE1: async function (req, res) {
   //     if (req.isSocket) {
     //       sails.sockets.join(req, 'feed');
       //     return res.ok("socket joined");
       // }
        //return res.view('competition/waitingE1');

        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateE1/"+model.id)
        }
        
        return res.view('competition/waitingE1');

    },

    waitingE2: async function (req, res) {
        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateE2/"+model.id)
        }
        
        return res.view('competition/waitingE2');

    },
    waitingE3: async function (req, res) {
        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateE3/"+model.id)
        }
        
        return res.view('competition/waitingE3');
    },

    waitingE4: async function (req, res) {
        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateE4/"+model.id)
        }
        
        return res.view('competition/waitingE4');

    },
    waitingE5: async function (req, res) {
        if (req.isSocket) {
            sails.sockets.join(req, 'feed');
            return res.ok("socket joined");
        }

        var model = await Competition.findOne({
            startTime:{'!=':null},
            endTime: null
        });

        if (model) {
            return res.redirect("/competition/updateE5/"+model.id)
        }
        
        return res.view('competition/waitingE5');
    },
    // action - [Pls ignore, not used!]
    // submitToAdmin: async function (req, res) {

    //     var model = await Competition.findOne(req.params.id);

    //     model.endTime = new Date();
    //     await Competition.update(req.params.id).set(model);
    //     return res.ok("Scores have submitted to Admin.");

    // if (req.wantsJSON) {
    //     return res.json({ 'competition': model });
    // } else {
    //     return res.view("competition/submitToAdmin", { 'competition': model });
    // }

    // },


    // action - import excel file
    import_xlsx: async function (req, res) {

        if (req.method == 'GET')
            return res.view('competition/import_xlsx');

        let eventId = parseInt(req.params.id) || 0;

        req.file('file').upload({ maxBytes: 10000000 }, async function whenDone(err, uploadedFiles) {
            if (err) { return res.serverError(err); }
            if (uploadedFiles.length === 0) { return res.badRequest('No file was uploaded'); }

            var XLSX = require('xlsx');
            var workbook = XLSX.readFile(uploadedFiles[0].fd);
            var ws = workbook.Sheets[workbook.SheetNames[0]];
            var data = XLSX.utils.sheet_to_json(ws);
            console.log(data);
            var models = await Competition.createEach(data).fetch();

            if (models.length == 0) {
                return res.badRequest("No data imported.");
            }
            for (var i = 0; i < models.length; i++) {
                await Competition.addToCollection(models[i].id, 'belongsTo').members(eventId);
            }

            // return res.redirect('/competition/admin/' + eventId);

            if (req.session.role == "admin") {
                return res.redirect('/competition/admin/' + eventId);
            } else if (req.session.role == "secretary") {
                return res.redirect('/competition/homepageS/');
            }

        });
    },

    // action - export_xlsx
    export_xlsx: async function (req, res) {

        var models = await Competition.find();

        var XLSX = require('xlsx');
        var wb = XLSX.utils.book_new();

        var ws = XLSX.utils.json_to_sheet(models.map(model => {
            return {
                athleteName: model.athleteName,
                athleteID: model.athleteID,
                competitionEvent: model.competitionEvent,

                d1Score: model.d1Score,
                e1Score: model.e1Score,
                e2Score: model.e2Score,
                e3Score: model.e3Score,
                e4Score: model.e4Score,
                e5Score: model.e5Score,
                eAvgScore: model.eAvgScore,

                // d2Score: model.d2Score,
                // dAvgScore: model.dAvgScore,  
                deduction: model.deduction,
                totalScore: model.totalScore,
                // startTime: model.startTime,
                // endTime: model.endTime,

            }
        }));
        XLSX.utils.book_append_sheet(wb, ws, "final_result");

        res.set("Content-disposition", "attachment; filename=final_result.xlsx");
        return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));
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

            return res.ok("Pending for approval of Chief Judge...");
            //return res.redirect('/competition/updateE1/6');  // hardcode url id

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
                e2Score: req.body.Competition.e2Score,



            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");
            //return res.redirect('/competition/updateE2/6');  // hardcode url id


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
                e3Score: req.body.Competition.e3Score,

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");

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
                e4Score: req.body.Competition.e4Score,

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");

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
                e5Score: req.body.Competition.e5Score,

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");

        }
    },

    // action - updateD1
    updateD1: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();
            
          // if(model.endTimeD == null || model.endTime ==null ) return res.ok("Pending for approval of Chief Judge...");

            return res.view('competition/updateD1', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({
                d1Score: req.body.Competition.d1Score,
                //endTimeD: req.body.Competition.endTimeD,
                endTimeD: new Date(),

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");

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
                d2Score: req.body.Competition.d2Score,

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Pending for approval of Chief Judge...");

        }
    },

    // action - Pls ignore it (not used!)
    updateDeduction: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/updateDeduction', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({

                deduction: req.body.Competition.deduction,

            }).fetch();

            if (models.length == 0) return res.notFound();


            if (req.wantsJSON) {
                return res.json({ 'competition': model });
            } else {
                return res.redirect("competition/update/", { 'competition': model });
                //return res.view("competition/scoreboard/", { 'competition': model });
            }

        }
    },

    // action - update (Chief Judge)
    update: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/update', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({
                athleteName: req.body.Competition.athleteName,
                athleteID: req.body.Competition.athleteID,
                competitionEvent: req.body.Competition.competitionEvent,

                e1Score: req.body.Competition.e1Score,
                e2Score: req.body.Competition.e2Score,
                e3Score: req.body.Competition.e3Score,
                e4Score: req.body.Competition.e4Score,
                e5Score: req.body.Competition.e5Score,
                d1Score: req.body.Competition.d1Score,
                d2Score: req.body.Competition.d2Score,

                deduction: req.body.Competition.deduction,
                dAvgScore: req.body.Competition.dAvgScore,
                eAvgScore: req.body.Competition.eAvgScore,
                totalScore: req.body.Competition.totalScore,

                startTime: req.body.Competition.startTime,
                endTime: new Date(),
                // endTime: req.body.Competition.endTime,

                //createdDate: req.body.Estate.createdDate,
                //updatedDate: new Date().toLocaleDateString(),
            }).fetch();

            if (models.length == 0) return res.notFound();


            if (req.wantsJSON) {
                return res.json({ 'competition': model });
            } else {
                return res.ok("Scores updated.");
                //return res.redirect('competition/submitToAdmin/', { competition: model });
                //return res.view("competition/scoreboard/", { 'competition': model });
            }

            //return res.ok("Scores updated.");

        }
    },

    // action - Pls ignore it (not used!)
    updateFinalScore: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/update', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({

                totalScore: req.body.Competition.totalScore,
                // endTime: req.body.Competition.endTime,

            }).fetch();

            if (models.length == 0) return res.notFound();


            if (req.wantsJSON) {
                return res.json({ 'competition': model });
            } else {
                return res.ok("Final score updated.");
                //return res.redirect('competition/submitToAdmin/', { competition: model });
                //return res.view("competition/scoreboard/", { 'competition': model });
            }


        }
    },





    // action - chiefjudge viewing
    chiefjudgeView: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();


            if (req.wantsJSON) {
                return res.json({ 'competition': model });
            } else {
                return res.view('competition/chiefjudgeView', { competition: model });
            }


            //return res.view('competition/chiefjudgeView', { competition: model });
        }

    },














};

