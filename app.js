var webRouter=require("./web_router");
var express=require("express");
var path=require("path");
var app=express();

var staticPublicDir = path.join(__dirname, 'public');
var staticResourceDir = path.join(__dirname, 'resource');
//���ؾ�̬��Դ�����м��
app.use('/public', express.static(staticPublicDir));
app.use('/resource', express.static(staticResourceDir));
//ģ����ͼ��Ŀ¼
app.set("views","./views");
//�����Ƿ�������ͼ���뻺�棬���ý��ӿ������ִ��Ч��
//app.set("view cache",true);
//����ģ������ĸ�ʽ�����ú���ģ������
app.set("view engine","ejs");
//����·��ģ��
app.use("/",webRouter);

var server=app.listen(8080,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log(__dirname);
	console.log("Ӧ��ʵ�����ʵ�ַΪhttp://%s:%s",host,port);
});
