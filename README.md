## Architecture
Serving HTML to a client file by file results in a slower browsing experience for the end user. It's also much more resource-intensive from a network perspective. Having a network transaction for each and every page creates a lot of network traffic. The more network traffic, the more potential points of failure.

Using SPA takes advantage of the computing resources on the end user's machine to perform work that would otherwise be completed by a network transaction. The work is done locally which means the result is delivered sooner. Pages are faster and more responsive.

The backend used a NoSQL database, particularly MongoDB, because the document structure used to store information in a Mongo database is very similar to the object structure of JavaScript. It is a relatively easy translation to map JSON data to a Mongo document. Also, document retrieval from MongoDB can be a faster than row retrieval from a SQL database. However, Mongo does require more resources to operate than SQL databases. MongoDB also doesn't follow ACID principles as closely as SQL, though it does a pretty good job. There are advantages and disadvantages to each database type.

## Functionality
JSON is similar to JavaScript objects with some small differences. In JSON, property names must always be double-quoted strings and trailing commas are forbidden. Not so in JavaScript. There is also no support in JSON for JavaScript values such as undefined. JSON formatting makes it simple to tie backend data to frontend UI by the writing and reading of properties. Properties are read directly in to frontend HTML (thanks to Angular) in a way very similar to how a JavaScript object properties would be read.

## Testing
No unit testing or integration testing has been completed at the time of this writing (10/19/23). Testing the API endpoints was done in a non-structured way. Postman was used to check that the endpoints for creating, reading, and updating documents were functional.

## Reflection
I've never had the chance to create an example of the MVC model from scratch. I've also enjoyed the opportunity to review Express. Angular is a complex framework and it has been beneficial to implement it from scratch to understand some of its foundational elements.