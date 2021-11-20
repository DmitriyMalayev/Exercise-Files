`dmitriymalayev@Dmitriys-Mini sample % express -h`

Usage: express [options] [dir]

Options:
--version output the version number
-e, --ejs add ejs engine support
--pug add pug engine support
--hbs add handlebars engine support
-H, --hogan add hogan.js engine support
-v, --view <engine> add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
--no-view use static html instead of view engine
-c, --css <engine> add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
--git add .gitignore
-f, --force force on non-empty directory
-h, --help output usage information

    express --view=hbs

`dmitriymalayev@Dmitriys-Mini sample % express --view=hbs`
create : public/
create : public/javascripts/
create : public/images/
create : public/stylesheets/
create : public/stylesheets/style.css
create : routes/
create : routes/index.js
create : routes/users.js
create : views/
create : views/error.hbs
create : views/index.hbs
create : views/layout.hbs
create : app.js
create : package.json
create : bin/
create : bin/www

install dependencies:
$ npm install

run the app:
$ DEBUG=sample:\* npm start

dmitriymalayev@Dmitriys-Mini express_app % npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (express_app)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/dmitriymalayev/Downloads/Ex_Files_Express_EssT/Exercise Files/express_app/package.json:

{
"name": "express_app",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"
}

Is this OK? (yes)

dmitriymalayev@Dmitriys-Mini express_app % npm install --save-dev babel-preset-env babel-preset-stage-0
npm WARN idealTree Removing dependencies.babel-preset-stage-0 in favor of devDependencies.babel-preset-stage-0

added 41 packages, and audited 440 packages in 1s

18 packages are looking for funding
run `npm fund` for details


```json

{
  "name": "express_app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"  
    //nodemon allows us to refresh the server automatically upon changes
    //This allows us to run ES6 code inside of our project 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.15"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1"
  }
}
 ```