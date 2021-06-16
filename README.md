# short-your-url
A simple websit to short a url.
Hosted URl: [https://short-ur-url.herokuapp.com/](https://short-ur-url.herokuapp.com/)

## Tech Used:
1. Html, CSS, Javascript
2. Node.js
3. Mongodb (database)

## Getting started
To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing mongod
- `npm start` to start the local server

## Code Overview
#### Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [ejs](https://github.com/mde/ejs) - (Embedded JavaScript templates) a node.js view engine 
- [shortid](https://github.com/dylang/shortid) - ShortId creates amazingly short non-sequential url-friendly unique ids.
- [nanoid](https://github.com/ai/nanoid/) - A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
- [dotenv](https://github.com/motdotla/dotenv) - a zero-dependency module that loads environment variables from a .env file into `process.env`.

#### DevDependencies
- [nodemon](https://github.com/remy/nodemon) - a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Application Structure
- `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application. It also contains the route definitions for our API.
- `config.js` - This file contains configuration for database as well as a central location for configuration/environment variables.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- `views/` - This folder contains the html file to render the data from database using `.ejs` template engine.
