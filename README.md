# my_app
This app describes what this app is about.

# steps to initialize repository
generate ssh key using command - `ssh-keygen` 
add generated ssh-key to github repository
clone git repository using command - `git clone git@github.com:nitinarjun/my_app.git`

# script for project setup
run this command to setup your project - `npm run setup`

# script for creating and running migrations
create migrations - `node_modules/.bin/sequelize migration:generate --config ./config/dbConfig.js`
run migrations - `node_modules/.bin/sequelize db:migrate --config ./config/dbConfig.js`
undo migrations - `node_modules/.bin/sequelize db:migrate --config ./confi/dbConfig.js`


