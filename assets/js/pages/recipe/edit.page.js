var updateRecipe = function(slug) {
  $.ajax({
    url: '/api/v1/recipe/' + slug,
    type: 'PUT',
    data: {
      title: $('#recipeTitleInput').val(),
      description: $('#recipeDescriptionInput').val()
    },
    success: function(result) {
      window.location = '/show/' + slug 
    }
});
} 