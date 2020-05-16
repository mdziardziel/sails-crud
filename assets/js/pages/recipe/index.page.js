var deleteRecipe = function(slug) {
  $.ajax({
    url: '/api/v1/recipe/' + slug,
    type: 'DELETE',
    success: function(result) {
        $('#card-' + slug ).remove()
    }
});
} 