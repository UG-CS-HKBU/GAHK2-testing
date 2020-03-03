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

  'GET /athlete/details/:id': 'AthleteController.details',

  'GET /athlete/admin/': 'AthleteController.admin',

  // judges scoring pages
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
