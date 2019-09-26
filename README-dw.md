# LAB - Deployment Workshop

## Proof of Life Server

### Author: Gina Pultorak

### Links and Resources
* [submission PR](https://github.com/ginapult-401-advanced-javascript/deployment-workshop/pulls)
* [travis](https://travis-ci.com/ginapult-401-advanced-javascript/deployment-workshop)
* [front-end](https://ginapult-deploymentworkshop.herokuapp.com/) (when applicable)

#### Documentation
* [jsdoc](https://ginapult-deploymentworkshop.herokuapp.com/docs/) (Server assignments)

### Modules
#### `pos.js`
##### Exported Values and Methods

###### `isAlive(dead) -> boolean`
Returns true/false to indicate how the server works

### Setup
#### `.env` requirements
* `PORT` - 3000

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns a boolean.
* Endpoint: `/docs`
  * Returns JSDoc Documentation Pages.
  
#### Tests
* Unit Tests: 'npm test'
* Lint Tests: 'npm run lint'

Incomplete Tests:
- Need to test xyz ...

#### UML
![UML Diagram](whiteboard.jpg)
