// parasails.registerPage('new', {
//   //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
//   //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
//   //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
//   data: {
//     //…
//   },

//   //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
//   //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
//   //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
//   beforeMount: function() {
//     // Attach any initial data from the server.
//     _.extend(this, SAILS_LOCALS);
//   },
//   mounted: async function() {
//     //…
//   },

//   //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
//   //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
//   //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
//   methods: {
//     //…
//   }
// });
var createRecipe = function() {
  $.ajax({
    url: '/api/v1/recipe/',
    type: 'POST',
    data: {
      title: $('#recipeTitleInput').val(),
      description: $('#recipeDescriptionInput').val()
    },
    success: function(result) {
      window.location = '/show/' + result.slug
    }
});
} 