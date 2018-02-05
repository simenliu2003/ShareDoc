var webRouter=require("./web_router");
var express=require("express");
var path=require("path");
var app=express();

var staticPublicDir = path.join(__dirname, 'public');
var staticResourceDir = path.join(__dirname, 'resource');
//挂载静态资源处理中间件
app.use('/public', express.static(staticPublicDir));
app.use('/resource', express.static(staticResourceDir));
//模板视图的目录
app.set("views","./views");
//设置是否启用视图编译缓存，启用将加快服务器执行效率
//app.set("view cache",true);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","ejs");
//挂载路由模块
app.use("/",webRouter);

var server=app.listen(8080,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log(__dirname);
	console.log("应用实例访问地址为http://%s:%s",host,port);
});
