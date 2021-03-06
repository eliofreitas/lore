var path = require('path');

function common(template) {
  return path.join('common', template);
}

function es6(template) {
  return path.join('es6', template);
}

module.exports = {

  // root
  './.babelrc': {copy: es6('babelrc')},
  './.editorconfig': {copy: common('editorconfig')},
  './.gitignore': {copy: common('gitignore')},
  './.lorerc': {copy: es6('lorerc')},
  './db.json': {copy: common('db.json')},
  './index.html': {copy: common('index.html')},
  './index.js': {copy: es6('index.js')},
  './package.json': {template: es6('package.json.njk')},
  './postcss.config.js': {copy: es6('postcss.config.js')},
  './README.md': {template: common('./README.md.njk')},
  './routes.js': {copy: es6('routes.js')},
  './webpack.config.js': {copy: es6('webpack.config.js')},

  // now
  './.now/package.json': {template: common('now/package.json.njk')},

  // actions
  './src/actions/.gitkeep': {copy: common('.gitkeep')},

  // collections
  './src/collections/.gitkeep': {copy: common('.gitkeep')},

  // components
  './src/components/Layout.js': {copy: es6('src/components/Layout.js')},
  './src/components/Master.js': {copy: es6('src/components/Master.js')},
  './src/components/RemoveLoadingScreen.js': {copy: es6('src/components/RemoveLoadingScreen.js')},
  './src/components/ShowLoadingScreen.js': {copy: es6('src/components/ShowLoadingScreen.js')},

  // constants
  './src/constants/ActionTypes.js': {copy: es6('src/constants/ActionTypes.js')},
  './src/constants/PayloadStates.js': {copy: es6('src/constants/PayloadStates.js')},

  // decorators
  './src/decorators/UserIsAuthenticated.js': {copy: es6('src/decorators/UserIsAuthenticated.js')},
  './src/decorators/UserIsAuthorized.js': {copy: es6('src/decorators/UserIsAuthorized.js')},

  // dialogs
  './src/dialogs/.gitkeep': {copy: common('.gitkeep')},

  // forms
  './src/forms/.gitkeep': {copy: common('.gitkeep')},

  // models
  './src/models/currentUser.js': {copy: es6('src/models/currentUser.js')},

  // reducers
  './src/reducers/.gitkeep': {copy: common('.gitkeep')},

  // utils
  './src/utils/auth.js': {copy: es6('src/utils/auth.js')},
  './src/utils/storageAvailable.js': {copy: es6('src/utils/storageAvailable.js')},

  // config
  './config/actions.js': {copy: es6('config/actions.js')},
  './config/auth.js': {copy: es6('config/auth.js')},
  './config/collections.js': {copy: es6('config/collections.js')},
  './config/connections.js': {copy: es6('config/connections.js')},
  './config/connect.js': {copy: es6('config/connect.js')},
  './config/dialog.js': {copy: es6('config/dialog.js')},
  './config/local.js': {copy: es6('config/local.js')},
  './config/models.js': {copy: es6('config/models.js')},
  './config/react.js': {copy: es6('config/react.js')},
  './config/reducers.js': {copy: es6('config/reducers.js')},
  './config/redux.js': {copy: es6('config/redux.js')},
  './config/router.js': {copy: es6('config/router.js')},

  // config/env
  './config/env/development.js': {copy: es6('config/env/development.js')},
  './config/env/production.js': {copy: es6('config/env/production.js')},

  // initializers
  './initializers/.gitkeep': {copy: common('.gitkeep')},

  // assets
  './assets/css/loading-screen.css': {copy: common('assets/css/loading-screen.css')},
  './assets/css/main.css': {copy: common('assets/css/main.css')},
  './assets/images/favicon.png': {copy: common('assets/images/favicon.png')},
  './assets/images/logo.png': {copy: common('assets/images/logo.png')},
  './assets/less/loading-screen.less': {copy: common('assets/less/loading-screen.less')},
  './assets/less/main.less': {copy: common('assets/less/main.less')},
  './assets/sass/loading-screen.scss': {copy: common('assets/sass/loading-screen.scss')},
  './assets/sass/main.scss': {copy: common('assets/sass/main.scss')}

};
