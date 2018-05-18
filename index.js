function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("partial-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementsByName("name")[0].innerHTML.value
  let recipeDescription = document.getElementsByName("description")[0].innerHTML.value
  let recipeIngredients = document.getElementsByName("ingredient").innerHTML.value
}

function displayEditForm() {
  form = document.getElementById("recipe-form-template")
  document.getElementsByName("main")[0].innerHTML += 
}