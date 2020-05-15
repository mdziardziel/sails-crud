module.exports = {


  friendlyName: 'View show',


  description: 'Display "Show" page.',

  inputs: {
    slug: {
      description: "recipe's slug",
      type: 'string',
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/recipe/show'
    }

  },


  fn: async function (inputs) {
    let recipe = await Recipe.findOne({ slug: inputs.slug });

    // Respond with view.
    return {
      locals: {
        recipe: recipe
      }
    };
  }


};
