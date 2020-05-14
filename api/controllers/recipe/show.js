module.exports = {


  friendlyName: 'Show',


  description: 'Show recipe.',


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
    let recipe = Recipe.findOne({ slug: inputs.slug });

    return recipe;
  }


};
