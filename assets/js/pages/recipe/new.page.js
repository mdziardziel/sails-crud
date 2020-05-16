var ingredientsFromForm = function(defaultName = "", defaultQuantity = ""){
  var ingredients = []
  $('#ingredientForm').find('.input-group').each(function(index) {
    var ingredient = {
      name: $(this).find('#ingredient-name').val(),
      quantity: $(this).find('#ingredient-quantity').val()
    }
    ingredients.push(ingredient)
  })
  return ingredients;
}

var createRecipe = function() {
  $.ajax({
    url: '/api/v1/recipe/',
    type: 'POST',
    data: {
      title: $('#recipeTitleInput').val(),
      description: $('#recipeDescriptionInput').val(),
      ingredients: ingredientsFromForm()
    },
    success: function(result) {
      window.location = '/show/' + result.slug
    }
});
} 

var addIngredient = function(){
  input = $('<div class="input-group"><label>Name:</label> <input class="form-control" id="ingredient-name"><label> Quantity:</label> <input class="form-control" id="ingredient-quantity"></div>');
  $('#ingredientForm').append(input);
}