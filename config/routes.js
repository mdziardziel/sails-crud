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

  '/': { action: 'recipe/view-index' },
  '/new': { action: 'recipe/view-new' },
  '/show/:slug': { action: 'recipe/view-show' },
  '/edit/:slug': { action: 'recipe/view-edit' },



  // API
  'GET /api/v1/recipe': { action: 'recipe/index' },
  'GET /api/v1/recipe/:slug': { action: 'recipe/show' },
  'POST /api/v1/recipe': { action: 'recipe/create' },
  'DELETE /api/v1/recipe/:slug': { action: 'recipe/destroy' },
  'PUT /api/v1/recipe/:slug': { action: 'recipe/update' },




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
