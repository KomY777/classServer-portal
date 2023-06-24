const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api',
        {
            "target": "http://localhost:8080/",
            "changeOrigin": true,
        }))
}




// module.exports = function(app) {
//     app.use(createProxyMiddleware('/course',
//         {
//             "target": "http://localhost:8080/",
//             "changeOrigin": true,
//         }))
// }
