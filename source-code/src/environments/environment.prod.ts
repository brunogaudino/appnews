export const environment = {
  production: true,
  API_KEY: '78741923813f4e2caac5939f47109dc6',
  HEADERS: {
    headers: {
      'Access-Control-Allow-Origin': '*', // Substitua com o domínio da sua origem permitida
      // Outros cabeçalhos CORS opcionais
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
  },
  TYPE_OF_NEWS:[
    "everything",
    "top-headlines"
  ],
  CATEGORIES:[
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
  COUNTRIES: [{
    "ae":"United Arab Emirates",
    "ar":"Argentine",
    "au":"Australia",
    "br":"Brazil",
    "ca":"Canada",
    "fr":"France",
    "de":"Germany",
    "ie":"Ireland",
    "it":"Italy",
    "jp":"Japan",
    "mx":"Mexico",
    "ru":"Russia",
    "gb":"Unite Kingdom",
    "us":"United States"
  }]
};
