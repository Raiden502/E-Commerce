const server = require('../app');
const config = require('../config');
const _port = (config.WWW_PORT||8081)

server.listen(_port,()=>{
    console.log("admin server running on port %d", _port);
})