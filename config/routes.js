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

 '/': 'UserController.homepage',
  
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'GET /user/logout': 'UserController.logout',


  'GET /athlete/transcript/': 'AthleteController.transcript',
  'GET /user/homepage/': 'UserController.homepage',
  'GET /user/setJudgeScreen/': 'UserController.setJudgeScreen',



  'GET /athlete/details/:id': 'AthleteController.details',

  'GET /athlete/admin/': 'AthleteController.admin',


  'POST /competition/create/': 'CompetitionController.create',
  'GET /competition/details/:id': 'CompetitionController.details',
  'GET /competition/admin/': 'CompetitionController.admin',


  'GET /competition/updateE1/:id': 'CompetitionController.updateE1',
  'POST /competition/updateE1/:id': 'CompetitionController.updateE1',

  'GET /competition/json': 'CompetitionController.json',

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
