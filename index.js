function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("partial-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })

  recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  // Handlebars.compile(document.getElementById("recipe-template").innerHTML)
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
  document.getElementsByName("main")[0].innerHTML +=
}

function updateRecipe() {

}
