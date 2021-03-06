import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('404', { path: '/*path' }); // REDIRECT TO LOGIN 
  this.route('login');
  this.route('students');
});

export default Router;
