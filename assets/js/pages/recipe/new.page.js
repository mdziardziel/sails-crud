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