export const makeFetch = (url) => fetch(url)
  .then(res => res.json());
  
