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

    //  { username: "Chief_Judge", password: hash, role: "admin" }
      // { username: "Ejudge1", password: hash, role: "user" },         // newly add
      // { username: "Ejudge2", password: hash, role: "user" },
      // { username: "Ejudge3", password: hash, role: "user" },
      // { username: "Ejudge4", password: hash, role: "user" },
      // { username: "Ejudge5", password: hash, role: "user" },
      // { username: "Djudge1", password: hash, role: "user" },
      // { username: "Djudge2", password: hash, role: "user" },
      { username: "Chief_Judge", password: hash, role: "admin" },
      { username: "Admin1", password: hash, role: "admin" },
      { username: "Admin2", password: hash, role: "admin" }

      // etc.
    ]);
 //}



 


 
// Association:
//  User (Judges: user; Chief_Judge: admin):
  // const Chief_Judge = await User.findOne({ username: "Chief_Judge"});





  return;


};
