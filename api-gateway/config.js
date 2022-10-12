let config = {
    WWW_PORT:(process.env.PORT||3001),
    user_URL:(process.env.user_URL|| "http://localhost:8082"),
    admin_URL:(process.env.admin_URL|| "http://localhost:8081"),
    home_URL:(process.env.home_URL|| "http://localhost:8083"),
    order_URL:(process.env.order_URL|| "http://localhost:8084"),
}
module.exports = config