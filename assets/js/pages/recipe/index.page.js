// parasails.registerPage('index', {
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
// let request = new XMLHttpRequest();
// request.open('GET', '/api/v1/recipe');
// request.responseType = 'text';
// request.onload = function() {
//   console.log(request.response);
// };
// request.send()

var deleteRecipe = function(slug) {
  $.ajax({
    url: '/api/v1/recipe/' + slug,
    type: 'DELETE',
    success: function(result) {
        $('#card-' + slug ).remove()
    }
});
} 