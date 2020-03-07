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
  
 // User
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'GET /user/logout': 'UserController.logout',

  'GET /user/homepage/': 'UserController.homepage',
  'GET /user/setJudgeScreen/': 'UserController.setJudgeScreen',


  //Competition
  'POST /competition/create/': 'CompetitionController.create',
  'GET /competition/admin/': 'CompetitionController.admin',

  'GET /competition/json': 'CompetitionController.json',

  'GET /competition/updateE1/:id': 'CompetitionController.updateE1',
  'POST /competition/updateE1/:id': 'CompetitionController.updateE1',

  'GET /competition/updateE2/:id': 'CompetitionController.updateE2',
  'POST /competition/updateE2/:id': 'CompetitionController.updateE2',

  

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
