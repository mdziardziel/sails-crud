module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',

  inputs: {
    slug: {
      description: "recipe's slug",
      type: 'string',
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/recipe/edit'
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
