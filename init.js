//import Simpla from 'simpla';

window.Simpla = Simpla;

Simpla.init({

  // The Github repo you want Simpla to use
  repo: 'OrenBochman/my-cms',

  // Netlify auth adapter, initialize with your Netlify site name
  auth: new SimplaNetlify({ site: 'orenbochman' }),

  // Public content source (optional)
  // Defaults to fetching directly from Github
  //source: 'https://orenbochman.netlify.com'
  source: 'https://oren.bochman.org',
  //source: 'window.location.origin'
  branch: 'master',
  public: 'dist'


});

// Prompt for login from auth adapter
Simpla.login(); 