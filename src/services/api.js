/*
  Material consultado sobre o módulo light-weight 'node-fetch' que trás o window.fetch para Node.js: npm install --save @types/node-fetch
  https://github.com/node-fetch/node-fetch#motivation
 */
// import fetch from 'node-fetch';

/*
  Essa função recebe uma url, consulta na API e retorna o objeto JSON resultado do sucesso de uma Promise do processamento da stream response
*/
const fetchAPI = async (url) => {
  const response = await fetch(url); // busca o resultado de uma Promise de consulta usando a api do mercado livre e uma url como parâmetro
  return response.json(); // retorna o objeto JSON resultado do sucesso de uma Promise do processamento da stream response
};
/*
  Essa função retorna uma lista das categorias disponíveis com seus respectivos ids

  Material consultado sobre Promise.resolve
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */
export async function getCategories() {
  const result = await fetchAPI('https://api.mercadolibre.com/sites/MLB/categories'); // busca o resultado de uma Promise de consulta usando a api do mercado livre

  return Promise.resolve(result); // retorna uma promise com os dados de resultado
}

// Essa função recebe um termo e retorna uma lista de itens que tenham o termo informado
export async function getProductsFromQuery(query) {
  const results = await fetchAPI(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`); // busca o resultado de uma Promise de consulta usando a api do mercado livre

  return Promise.resolve(results); // retorna uma promise com os dados de resultado
}

export async function getProductsFromCategory(category) {
  const results = await fetchAPI(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`); // busca o resultado de uma Promise de consulta usando a api do mercado livre

  return Promise.resolve(results); // retorna uma promise com os dados de resultado
}
/*
  Essa função recebe o id de uma categoria e um termo e retorna uma lista de itens desta categoria e que tenham o termo informado

  Material consultado sobre Promise.resolve
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */
export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  if (categoryId === '') {
    // console.log('quary');
    return getProductsFromQuery(query);
  } if (query === '') {
    // console.log('categoryId');
    return getProductsFromCategory(categoryId);
  }
  // console.log('else');
  const results = await fetchAPI(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`); // busca o resultado de uma Promise de consulta usando a api do mercado livre

  return Promise.resolve(results); // retorna uma promise com os dados de resultado
}
