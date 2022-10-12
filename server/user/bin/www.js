const server = require('../app');
const config = require('../config');
const _port = (config.WWW_PORT||8082)

server.listen(_port,()=>{
    console.log("user server running on port %d", _port);
})