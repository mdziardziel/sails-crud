module.exports = {


  friendlyName: 'Create',


  description: 'Create recipe.',


  inputs: {
    title: { type: 'string', required: true, },
    description: { type: 'string', required: true, },
    ingredients: { type: 'json', required: false, }, 
  },


  exits: {

  },


  fn: async function (inputs) {
    var randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
    inputs.slug = inputs.title.replace(" ", "-") + '-' + randomString;
    var recipe = await Recipe.create(inputs)
    //  await Recipe.findOne({ slug: inputs.slug })
    // All done.
    return recipe;

  }


};
