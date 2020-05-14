module.exports = {


  friendlyName: 'Update',


  description: 'Update recipe.',


  inputs: {
    slug: {
      description: "recipe's slug",
      type: 'string',
      required: true
    },
    title: { type: 'string', required: false, },
    description: { type: 'string', required: false, },
    ingredients: { type: 'json', required: false, },
  },


  exits: {

  },


  fn: async function (inputs) {
    let recipe = Recipe.updateOne({ slug: inputs.slug }).set(inputs)
    // All done.
    return recipe;

  }


};
