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










  // Create Athlete data from excel provided
  // codes...


  if (await Competition.count() > 0) {
    return;
  }


  // For Demo only
//  if (await Athlete.count() == 0) {
  await Competition.createEach([
    { athleteName: "Cheung Ka Ming", athleteID: 001, competitionEvent: "pommel horse", e1Score: 0, e2Score: 0},
    { athleteName: "Wong Ho", athleteID: 002, competitionEvent: "pommel horse", e1Score: 0, e2Score: 0},
    
    // etc.
  ]);
//}



  if (await Competition.count() > 0) {
    return;
  }


//  if (await User.count() == 0) {
    // const hash = await sails.bcrypt.hash('123456', saltRounds);

    // await User.createEach([
    //   { username: "Chief_Judge", password: hash, role: "admin" }
    //   // etc.
    // ]);
//  }



  // Athlete (replace Estate):
  // const athlete1 = await Athlete.findOne({ athleteID: "001" });
  // const athlete2 = await Athlete.findOne({ athleteID: "002"  });


// Association:
//  User (Judges: user; Chief_Judge: admin):
    
  // const Ejudge1 = await User.findOne({ username: "Ejudge1"});  // newly add
  // const Ejudge2 = await User.findOne({ username: "Ejudge2"});
  // const Ejudge3 = await User.findOne({ username: "Ejudge3"});
  // const Ejudge4 = await User.findOne({ username: "Ejudge4"});
  // const Ejudge5 = await User.findOne({ username: "Ejudge5"});
  // const Djudge1 = await User.findOne({ username: "Djudge1"});
  // const Djudge2 = await User.findOne({ username: "Djudge2"});
  // const Chief_Judge = await User.findOne({ username: "Chief_Judge"});


  // await User.addToCollection(Ejudge1.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Ejudge2.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Ejudge3.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Ejudge4.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Ejudge5.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Djudge1.id, 'grades').members([athlete1.id, athlete2.id]);
  // await User.addToCollection(Djudge2.id, 'grades').members([athlete1.id, athlete2.id]);

  // await User.addToCollection(Chief_Judge.id, 'grades').members([athlete1.id, athlete2.id]);


  return;


};
