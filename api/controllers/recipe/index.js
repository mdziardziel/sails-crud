module.exports = {


  friendlyName: 'Index',


  description: 'Index recipe.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let recipes = Recipe.find({});
    // All done.
    return recipes;

  }


};
