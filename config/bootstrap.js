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










  


  if (await Competition.count() > 0) {
    return;
  }


//   // For Demo only
// //  if (await Athlete.count() == 0) {
//   await Competition.createEach([
//     { athleteName: "Cheung Ka Ming", athleteID: 001, competitionEvent: "Pommel Horse", e1Score: 0, e2Score: 0},
//     { athleteName: "Wong Ho", athleteID: 002, competitionEvent: "Pommel Horse", e1Score: 0, e2Score: 0},
    
//     // etc.
//   ]);
// //}



  if (await User.count() > 0) {
    return;
  }


 //if (await User.count() == 0) {
    const hash = await sails.bcrypt.hash('123456', saltRounds);

    await User.createEach([
      { username: "Admin", password: hash, role: "admin" },
      { username: "Admin2", password: hash, role: "admin" },
      { username: "Admin3", password: hash, role: "admin" },
      { username: "Admin4", password: hash, role: "admin" },
      { username: "Secretary", password: hash, role: "secretary" },
      { username: "Chief_Judge", password: hash, role: "chiefJudge" }

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
      { eventName: "Pommel Horse", d1Name: "DJudge1", d2Name: "DJudge2", e1Name: "EJudge1", e2Name: "EJudge2", e3Name: "EJudge3", e4Name: "EJudge4", e5Name: "EJudge5",  },
      { eventName: "Ring", d1Name: "DJudge1R", d2Name: "DJudge2R", e1Name: "EJudge1R", e2Name: "EJudge2R", e3Name: "EJudge3R", e4Name: "EJudge4R", e5Name: "EJudge5R",  },
      { eventName: "Parallel Bars", d1Name: "DJudge1P", d2Name: "DJudge2P", e1Name: "EJudge1P", e2Name: "EJudge2P", e3Name: "EJudge3P", e4Name: "EJudge4P", e5Name: "EJudge5P",  },
      { eventName: "Horizontal Bar", d1Name: "DJudge1H", d2Name: "DJudge2H", e1Name: "EJudge1H", e2Name: "EJudge2H", e3Name: "EJudge3H", e4Name: "EJudge4H", e5Name: "EJudge5H",  },
      { eventName: "Floor Exercise", d1Name: "DJudge1F", d2Name: "DJudge2F", e1Name: "EJudge1F", e2Name: "EJudge2F", e3Name: "EJudge3F", e4Name: "EJudge4F", e5Name: "EJudge5F",  },
      { eventName: "Vault", d1Name: "DJudge1V", d2Name: "DJudge2V", e1Name: "EJudge1V", e2Name: "EJudge2V", e3Name: "EJudge3V", e4Name: "EJudge4V", e5Name: "EJudge5V",  },

      // etc.
    ]);
 }



 


 
// Association:
//  User (Judges: user; Chief_Judge: admin):
  // const Chief_Judge = await User.findOne({ username: "Chief_Judge"});





  return;


};
