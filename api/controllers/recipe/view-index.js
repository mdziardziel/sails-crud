module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/recipe/index'
    }

  },


  fn: async function () {

    //await https://sailsjs.com/documentation/reference/waterline-orm/queries
    var recipes = await Recipe.find({})
    // Respond with view.
    return {
      locals: {
        recipes: recipes
      }
    };

  }


};
