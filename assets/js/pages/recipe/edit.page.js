var updateRecipe = function(slug) {
  $.ajax({
    url: '/api/v1/recipe/' + slug,
    type: 'PUT',
    data: {
      title: $('#recipeTitleInput').val(),
      description: $('#recipeDescriptionInput').val(),
      ingredients: ingredientsFromForm()
    },
    success: function(result) {
      window.location = '/show/' + slug 
    }
});
} 