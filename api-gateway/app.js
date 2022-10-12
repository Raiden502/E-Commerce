const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');
const cors = require('cors')

let proxyDashboardContent;
let proxyDashboardSearch;
let proxyDashboardSeleted;
let proxyUserLogin;
let proxyUserAddCart;
let proxyUserDeleteCart;
let proxyUserShowCart
let proxyUserAddNewUser;
let proxyUsershow;
let proxyAdminLogin;
let proxyAdminOrders;
let proxyAdmindeluser;
let proxyOrderGetOrderdetails;
let proxyOrderAddOrder
let proxyOrderDelOrder

app.use(cors())
proxyDashboardContent = createProxyMiddleware({target:config.home_URL,pathRewrite:{'^/home/':'/api/dashboard/getResult'}})
app.use('/home/',proxyDashboardContent)

proxyDashboardSearch = createProxyMiddleware({target:config.home_URL,pathRewrite:{'^/search/':'/api/dashboard/search'}})
app.use('/search/',proxyDashboardSearch)

proxyDashboardSeleted = createProxyMiddleware({target:config.home_URL,pathRewrite:{'^/display/':'/api/dashboard/selectedItem/'}})
app.use('/display/',proxyDashboardSeleted)

proxyUserAddNewUser = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/newUser/':'/api/user/newuser'}})
app.use('/newUser/',proxyUserAddNewUser)

proxyUserLogin = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/login/':'/api/user/login'}})
app.use('/login/',proxyUserLogin)

proxyUsershow = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/show/':'/api/user/show'}})
app.use('/show/',proxyUsershow)

proxyUserAddCart = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/addCart/':'/api/user/addcartitem'}})
app.use('/addCart/',proxyUserAddCart)

proxyUserDeleteCart = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/delCart/':'/api/user/deletecartitem'}})
app.use('/delCart/',proxyUserDeleteCart)

proxyUserShowCart = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/cart/':'/api/user/showcart'}})
app.use('/cart/',proxyUserShowCart)

proxyUserShowCart = createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/allUser/':'/api/user/getuser'}})
app.use('/allUser/',proxyUserShowCart)

proxyAdminLogin = createProxyMiddleware({target:config.admin_URL,pathRewrite:{'^/adminLogin/':'/api/admin/login'}})
app.use('/adminLogin/',proxyAdminLogin);

proxyAdminLogin = createProxyMiddleware({target:config.admin_URL,pathRewrite:{'^/addProduct/':'/api/admin/addProduct'}})
app.use('/addProduct/',proxyAdminLogin);

proxyAdminLogin = createProxyMiddleware({target:config.admin_URL,pathRewrite:{'^/newAdmin/':'/api/admin/addAdmin'}})
app.use('/newAdmin/',proxyAdminLogin);

proxyAdminOrders = createProxyMiddleware({target:config.admin_URL,pathRewrite:{'^/getOrders/':'/api/admin/getOrder'}})
app.use('/getOrders/',proxyAdminOrders);

proxyAdmindeluser = createProxyMiddleware({target:config.admin_URL,pathRewrite:{'^/delUser/':'/api/admin/delUser'}})
app.use('/delUser/',proxyAdmindeluser);

proxyOrderGetOrderdetails = createProxyMiddleware({target:config.order_URL,pathRewrite:{'^/getOrderDetails/':'/api/order/getDetails'}})
app.use('/getOrderDetails/',proxyOrderGetOrderdetails);

proxyOrderAddOrder = createProxyMiddleware({target:config.order_URL,pathRewrite:{'^/addOrder/':'/api/order/addOrder'}})
app.use('/addOrder/',proxyOrderAddOrder);

proxyOrderDelOrder = createProxyMiddleware({target:config.order_URL,pathRewrite:{'^/delOrder/':'/api/order/delOrder'}})
app.use('/delOrder/',proxyOrderDelOrder);

module.exports=app;