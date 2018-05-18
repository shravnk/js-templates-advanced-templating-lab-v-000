function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("partial-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate()
  // Handlebars.compile(document.getElementById("recipe-template").innerHTML)
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementsByName("name")[0].value
  let recipeDescription = document.getElementsByName("description")[0].value
  
  let ingredientNodes = document.getElementsByName("ingredient")
  
  let recipeIngredients = []
  for(let i=0; i < recipeNodes.length; i++) {
    recipeIngredients.push(recipeNodes)
    
  }
}

function displayEditForm() {
  document.getElementsByName("main")[0].innerHTML += recipeFormTemplate
}

function updateRecipe() {

}
