const server = require('../app');
const config = require('../config');
const _port = (config.WWW_PORT||3001)

server.listen(_port,()=>{
    console.log("api gateway server running on port %d", _port);
})