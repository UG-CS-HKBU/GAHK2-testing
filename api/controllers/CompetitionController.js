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

            const totalConversation = await BotUsage.find();

            sails.sockets.join(req.socket, 'feed');
            res.send({success: true, totalConversation});

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
        var model = await Competition.findOne(req.params.id);

        model.startTime = new Date();
        await Competition.update(req.params.id).set(model);
        return res.redirect('/competition/admin');
    },


    // action - start
    start: async function (req, res) {
        var model = await Competition.findOne(req.params.id);

        model.startTime = new Date();
        await Competition.update(req.params.id).set(model);
        return res.redirect('/competition/admin');
    },

    // action - admin
    admin: async function (req, res) {

        var models = await Competition.find();

        // Cal avg D and E scores:
        // const dAvg = models.d1Score + models.d2Score
        // sails.log("D1 score is : ", models.)
        // sails.log("Average D score is : ", dAvg)

        return res.view('competition/admin', { competition: models });

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
        }
        );

        // Cal avg D and E scores:


        return res.view('competition/ranking', { competition: models });

    },

    // action - homepage
    homepage: async function (req, res) {

        return res.view('competition/homepage');

    },

    // action - waiting
    waiting: async function (req, res) {

        return res.view('competition/waiting');

    },

    // action - 
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

                dAvgScore: req.body.Competition.dAvgScore,
                eAvgScore: req.body.Competition.eAvgScore,
                totalScore: req.body.Competition.totalScore,
             
                startTime: req.body.Competition.startTime,
                endTime: req.body.Competition.endTime,

                //createdDate: req.body.Estate.createdDate,
                //updatedDate: new Date().toLocaleDateString(),
            }).fetch();

            if (models.length == 0) return res.notFound();

            //return res.ok("Record updated");
            return res.ok("Scores updated.");

        }
    },


    // action - chiefjudge viewing
    chiefjudgeView: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/chiefjudgeView', { competition: model });
        }

    },

    // action - import excel file
    import_xlsx: async function (req, res) {

        if (req.method == 'GET')
            return res.view('competition/import_xlsx');

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

            return res.redirect('/competition/admin/');
            //return res.ok("Excel file imported.");
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
                e1Score: model.e1Score,
                e2Score: model.e2Score,
                e3Score: model.e3Score,
                e4Score: model.e4Score,
                e5Score: model.e5Score,
                d1Score: model.d1Score,
                d2Score: model.d2Score,
                dAvgScore: model.dAvgScore,
                eAvgScore: model.eAvgScore,
                totalScore: model.totalScore,
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

            return res.ok("Give Score successfully.");
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

            return res.ok("Give Score successfully.");
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

            return res.ok("Give Score successfully.");

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

            return res.ok("Give Score successfully.");

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

            return res.ok("Give Score successfully.");

        }
    },

    // action - updateD1
    updateD1: async function (req, res) {

        if (req.method == "GET") {

            var model = await Competition.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('competition/updateD1', { competition: model });

        } else {

            if (!req.body.Competition)
                return res.badRequest("Form-data not received.");

            var models = await Competition.update(req.params.id).set({
                d1Score: req.body.Competition.d1Score,

            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Give Score successfully.");

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

            return res.ok("Give Score successfully.");

        }
    },












};

