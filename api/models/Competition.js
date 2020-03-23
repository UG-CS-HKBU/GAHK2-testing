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
    atheleteName: {
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

    totalScore: {
      type: "number",
    },




  },

};

