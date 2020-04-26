/**
 * Competition.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    athleteName: {
      type: "string"
    },
    
    athleteID: {
      type: "string"
    },

    competitionEvent: {
      type: "string"
    },

    e1Score: {
      type: "number",
      //required: true
    },

    e2Score: {
      type: "number",
    },

    e3Score: {
      type: "number",
    },

    e4Score: {
      type: "number",
    },

    e5Score: {
      type: "number",
    },

    d1Score: {
      type: "number",
    },

    d2Score: {
      type: "number",
    },

    dAvgScore: {
      type: "number",
    },

    eAvgScore: {
      type: "number",
    },

    deduction: {
      type: "number",
    },

    totalScore: {
      type: "number",
    },

    ranking: {
      type: "number",
    },

    ranking: {
      type: "number",
    },

    startTime:{
      type: 'ref',
      columnType: "dateTime"
    },

    endTime:{
      type: 'ref',
      columnType: "dateTime"
    },

    endTimeD:{
      type: 'ref',
      columnType: "dateTime"
    },
   
    belongsTo: {
      collection: 'Event',
      via: 'includes'
    },

   },

  beforeUpdate(model, cb) {
    // model.dAvgScore = (model.d1Score + model.d2Score) / 2 ;
    

   // let sortEScore = [model.e1Score, model.e2Score, model.e3Score, model.e4Score, model.e5Score].sort();
    //model.eAvgScore = 10 - (sortEScore[1] + sortEScore[2] + sortEScore[3]) / 3;

    //model.totalScore = parseFloat((model.d1Score + model.eAvgScore).toPrecision(4));

  },

  afterUpdate(model, cb) {
    console.log(model);

    if (model.startTime && !model.endTime) {
      console.log('start');
      sails.sockets.broadcast('feed', 'start', model);
    }
    cb();
  }

};
// };
