// module.exports = {
//     modelBaseDirectory: 'app_server/models', // model directory name
//     models: '**/*.js', // model matcher
//     data: 'data', // data directory name
//     db: 'mongodb://localhost:27017/DB-URL' // db connection url
// }

module.exports = {
    modelBaseDirectory:"app_api/models",
    models: ["*.js", "!db.js"],
    data: "data",
    db: "mongodb://localhost:27017/travlr"
}