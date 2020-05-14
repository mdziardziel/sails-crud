module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy recipe.',


  inputs: {
    slug: {
      description: "recipe's slug",
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let recipe = Recipe.destroyOne({ slug: inputs.slug });

    // All done.
    return recipe;

  }


};
