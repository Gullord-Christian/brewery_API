File structure
ui - Holds the client application

public - This holds all of our static files
src

components - This folder holds all of the different components that will make up our views
views - These represent a unique page on the website i.e. Home or About. These are still normal react components.
App.js - This is what renders all of our browser routes and different views

    index.js - This is what renders the react app by rendering App.js, should not change

    package.json - Defines npm behaviors and packages for the client

server - Holds the server application

config - This holds our configuration files, like mongoDB uri
controllers - These hold all of the callback functions that each route will call
models - This holds all of our data models
routes - This holds all of our HTTP to URL path associations for each unique url

    server.js - Defines npm behaviors and packages for the client

package.json - Defines npm behaviors like the scripts defined in the next section of the README
.gitignore - Tells git which files to ignore
README - This file!
