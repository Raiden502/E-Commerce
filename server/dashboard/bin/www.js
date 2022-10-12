const server = require('../app');
const config = require('../config');
const _port = (config.WWW_PORT||8083)

server.listen(_port,()=>{
    console.log("dashboard server running on port %d", _port);
})