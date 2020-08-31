var recipes = {
  prop : 1,
};
function updateObjectWithKeyAndValue(object, key, value){
  var oldRecipes = Object.assign({}, recipes, {['prop2']: 2});
  return oldRecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes['prop2'] = 2;
  return recipes;
}
function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({},recipes);
  delete newRecipes.prop
  return newRecipes;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop;
  return recipes;
}