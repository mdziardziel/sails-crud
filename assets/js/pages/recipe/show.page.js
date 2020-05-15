// parasails.registerPage('show', {
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

var redirectBack = function() {
  window.location.href = document.referrer || '/'
}
