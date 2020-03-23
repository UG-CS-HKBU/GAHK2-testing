/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */



module.exports.bootstrap = async function () {

  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```










  

  // Competition api:
  if (await Competition.count() > 0) {
    return;
  }


   // For Demo only
//  if (await Athlete.count() == 0) {
  // await Competition.createEach([
  //   { athleteName: "Cheung Ka Ming", athleteID: 001, e1Score: 0, e2Score: 0},
  //   { athleteName: "Wong Ho", athleteID: 002, e1Score: 0, e2Score: 0},
  //   { athleteName: "Wong Ha Yu", athleteID: 001, e1Score: 0, e2Score: 0},
  //   { athleteName: "Lee Wing", athleteID: 002, e1Score: 0, e2Score: 0},
  //   { athleteName: "Lok Hing", athleteID: 001, e1Score: 0, e2Score: 0},
  //   { athleteName: "Lee Wing", athleteID: 002, e1Score: 0, e2Score: 0},
  //   { athleteName: "Ha Sing", athleteID: 001, e1Score: 0, e2Score: 0},
  //   { athleteName: "Wu Hoi", athleteID: 002, e1Score: 0, e2Score: 0},
    
  //   // etc.
  // ]);
//}


  // User api:
  if (await User.count() > 0) {
    return;
  }


 //if (await User.count() == 0) {
    const hash = await sails.bcrypt.hash('123456', saltRounds);

    await User.createEach([

    //  { username: "Chief_Judge", password: hash, role: "admin" }
      // { username: "Ejudge1", password: hash, role: "user" },         // newly add
      // { username: "Ejudge2", password: hash, role: "user" },
      // { username: "Ejudge3", password: hash, role: "user" },
      // { username: "Ejudge4", password: hash, role: "user" },
      // { username: "Ejudge5", password: hash, role: "user" },
      // { username: "Djudge1", password: hash, role: "user" },
      // { username: "Djudge2", password: hash, role: "user" },
      { username: "Chief_Judge", password: hash, role: "chiefJudge" },
      { username: "Admin1", password: hash, role: "admin" },
      { username: "Admin2", password: hash, role: "admin" }

      // etc.
    ]);
 //}


    // Event api:
  if (await Event.count() > 0) {
    return;
  }


 if (await Event.count() == 0) {

    await Event.createEach([

      // { username: "Djudge2", password: hash, role: "user" },
      { eventNumber: 1, eventName: "Pommel Horse", d1Name: "DJudge1", d2Name: "DJudge2", e1Name: "EJudge1", e2Name: "EJudge2", e3Name: "EJudge3", e4Name: "EJudge4", e5Name: "EJudge5",  },
      { eventNumber: 2, eventName: "Ring", d1Name: "DJudge1R", d2Name: "DJudge2R", e1Name: "EJudge1R", e2Name: "EJudge2R", e3Name: "EJudge3R", e4Name: "EJudge4R", e5Name: "EJudge5R",  },
      { eventNumber: 3, eventName: "Parallel Bars", d1Name: "DJudge1P", d2Name: "DJudge2P", e1Name: "EJudge1P", e2Name: "EJudge2P", e3Name: "EJudge3P", e4Name: "EJudge4P", e5Name: "EJudge5P",  },
      { eventNumber: 4, eventName: "Horizontal Bar", d1Name: "DJudge1H", d2Name: "DJudge2H", e1Name: "EJudge1H", e2Name: "EJudge2H", e3Name: "EJudge3H", e4Name: "EJudge4H", e5Name: "EJudge5H",  },

      // etc.
    ]);
 }



 


 
// Association:
  //  const pommelHorse = await Event.findOne({ eventName: "Pommel Horse"});
  //  const ring = await Event.findOne({ eventName: "Ring"});
  //  const parallelBars = await Event.findOne({ eventName: "Parallel Bars"});
  //  const horizontalBar = await Event.findOne({ eventName: "Horizontal Bar"});


  // const competitionOne = await Competition.findOne({ competitionEvent: "Pommel Horse" });
  // const competitionTwo = await Competition.findOne({ competitionEvent: "Ring" });
  // const competitionThree = await Competition.findOne({ competitionEvent: "Parallel Bars" });
  // const competitionFour = await Competition.findOne({ competitionEvent: "Horizontal Bar" });


  // await Event.addToCollection(pommelHorse.id, 'includes').members(competitionOne.id);
  // await Event.addToCollection(ring.id, 'includes').members(competitionTwo.id);
  // await Event.addToCollection(parallelBars.id, 'includes').members(competitionThree.id);
  // await Event.addToCollection(horizontalBar.id, 'includes').members(competitionFour.id);




  return;


};
