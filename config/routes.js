/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

//  '/': { view: 'pages/homepage' },

 '/': 'UserController.login',
  
 //socket
 'GET /init-chat': 'CompetitionController.newConversationReading',
 'GET /score': 'CompetitionController.showScore',

 'GET /api/chat-conversation-count': 'CompetitionController.chatBotUsageStats',
 'GET /api/get-daily-usage-stats': 'CompetitionController.chatBotUsageStats',

 'GET /api/v1/chat-conversation-count': 'CompetitionController.chatBotUsageStats',
 'GET /api/v1/get-daily-usage-stats': 'CompetitionController.chatBotUsageStats',


 // User
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'GET /user/logout': 'UserController.logout',


  //Competition
  'POST /competition/create/': 'CompetitionController.create',

  'GET /competition/admin/:id': 'CompetitionController.admin',
  'POST /competition/admin/:id': 'CompetitionController.admin',

  'GET /competition/chiefJudge/:id': 'CompetitionController.chiefJudge',
  'POST /competition/chiefJudge/:id': 'CompetitionController.chiefJudge',


  'GET /competition/json': 'CompetitionController.json',

  'GET /competition/update/:id': 'CompetitionController.update',
  'POST /competition/update/:id': 'CompetitionController.update',

  'GET /competition/updateFinalScore/:id': 'CompetitionController.updateFinalScore',
  'POST /competition/updateFinalScore/:id': 'CompetitionController.updateFinalScore',

  'GET /competition/chiefjudgeView/:id': 'CompetitionController.chiefjudgeView',
  // 'POST /competition/chiefjudgeView/:id': 'CompetitionController.chiefjudgeView',

  'GET /competition/updateE1/:id': 'CompetitionController.updateE1',
  'POST /competition/updateE1/:id': 'CompetitionController.updateE1',

  'GET /competition/updateE2/:id': 'CompetitionController.updateE2',
  'POST /competition/updateE2/:id': 'CompetitionController.updateE2',

  'GET /competition/updateE3/:id': 'CompetitionController.updateE3',
  'POST /competition/updateE3/:id': 'CompetitionController.updateE3',

  'GET /competition/updateE4/:id': 'CompetitionController.updateE4',
  'POST /competition/updateE4/:id': 'CompetitionController.updateE4',

  'GET /competition/updateE5/:id': 'CompetitionController.updateE5',
  'POST /competition/updateE5/:id': 'CompetitionController.updateE5',

  'GET /competition/updateD1/:id': 'CompetitionController.updateD1',
  'POST /competition/updateD1/:id': 'CompetitionController.updateD1',

  'GET /competition/updateD2/:id': 'CompetitionController.updateD2',
  'POST /competition/updateD2/:id': 'CompetitionController.updateD2',

  'GET /competition/updateDeduction/:id': 'CompetitionController.updateDeduction',
  'POST /competition/updateDeduction/:id': 'CompetitionController.updateDeduction',


  '/competition/import_xlsx/:id': 'CompetitionController.import_xlsx',
  // 'POST /competition/import_xlsx': 'CompetitionController.import_xlsx',
  //'POST /competition/export_xlsx': 'CompetitionController.export_xlsx',
  'GET /competition/export_xlsx': 'CompetitionController.export_xlsx',

  'GET /competition/scoreboard/:id': 'CompetitionController.scoreboard',
  'GET /competition/ranking/': 'CompetitionController.ranking',
  'GET /competition/homepage': 'CompetitionController.homepage',
  'GET /competition/homepageCJ': 'CompetitionController.homepageCJ',
  'GET /competition/homepageS': 'CompetitionController.homepageS',
  'GET /competition/start/:id': 'CompetitionController.start',
  //'GET /competition/waiting/': 'CompetitionController.waiting',
  'GET /competition/scoreboard/:id': 'CompetitionController.scoreboard',
  'POST /competition/scoreboard/:id': 'CompetitionController.scoreboard',

  'GET /competition/submitToAdmin/:id': 'CompetitionController.submitToAdmin',
  'POST /competition/submitToAdmin/:id': 'CompetitionController.submitToAdmin',

  
//waiting page
  '/competition/waitingD1': 'CompetitionController.waitingD1',
  '/competition/waitingE1': 'CompetitionController.waitingE1',
  '/competition/waitingE2': 'CompetitionController.waitingE2',
  '/competition/waitingE3': 'CompetitionController.waitingE3',
  '/competition/waitingE4': 'CompetitionController.waitingE4',
  '/competition/waitingE5': 'CompetitionController.waitingE5',

  // judges scoring pages
  'GET /user/d1/': 'UserController.createD1',
  'POST /user/d1/': 'UserController.createD1',

  'GET /user/d2/': 'UserController.createD2',
  'POST /user/d2/': 'UserController.createD2',

  'GET /user/e1/': 'UserController.createE1',
  'POST /user/e1/': 'UserController.createE1',

  'GET /user/e2/': 'UserController.createE2',
  'POST /user/e2/': 'UserController.createE2',

  'GET /user/e3/': 'UserController.createE3',
  'POST /user/e3/': 'UserController.createE3',

  'GET /user/e4/': 'UserController.createE4',
  'POST /user/e4/': 'UserController.createE4',

  'GET /user/e5/': 'UserController.createE5',
  'POST /user/e5/': 'UserController.createE5',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
