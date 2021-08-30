/**
 *  on trouve la recette voulue dans la liste des route
 * @param {Array} listToTest - toutes les routes
 * @param {string} searchedSlug - le slug de la route recherchée
 * @return {Object} - La route trouvée
 */


export function findRoute(listToTest, searchedSlug) {
  // console.log("selector coucou")
    const result = listToTest.find((testedObject) => {
      return testedObject.slug === searchedSlug;
    });
    // console.log("result "+result)
    return result;
  }