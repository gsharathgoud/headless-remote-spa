// Use Service token exchange for Cloud Env PROD
// const proxy = require('./proxy/setupProxy.auth.service-token')
// Use Dev token for local development with Cloud Env
// const proxy = require('./proxy/setupProxy.auth.dev-token')
// Use user/pass for local development with Local Author Env
// const proxy = require('./proxy/setupProxy.auth.basic')
// Auth not needed for local development with Local Publisher Env
// const proxy = require('./proxy/setupProxy.auth.none')
// Proxy configuration for SPA Editor (and GraphQL) using Basic Auth
const proxy = require("./proxy/setupProxy.spa-editor.auth.basic");

/*
    Set up a proxy with AEM for local development
    In a production environment this proxy should be set up at the webserver level or absolute URLs should be used.
*/

module.exports = proxy;
