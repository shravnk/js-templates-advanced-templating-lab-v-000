function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate()
  // Handlebars.compile(document.getElementById("recipe-template").innerHTML)
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementById("name")[0].value
  let recipeDescription = document.getElementById("description")[0].value

  let ingredientNodes = document.getElementsByName("ingredients")

  let recipeIngredients = []
  for(let i=0; i < recipeNodes.length; i++) {
    recipeIngredients.push(recipeNodes[i].value)
    }
  document.getElementById("main").innerHTML = "suck me"
  // recipeTemplate({recipeName, recipeDescription, recipeIngredients}}
  }

function displayEditForm() {
  document.getElementsByName("main")[0].innerHTML += recipeFormTemplate
}

function updateRecipe() {
  createRecipe()
}
