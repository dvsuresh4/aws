var http = require('http')
var nodemailer = require('nodemailer')
var url = require('url')

http.createServer(function (req,res){
	var q1 = url.parse(req.url,true);
	if(q1.pathname == '/submit'){
		console.log('ok');
		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.write('successfull');
		var q = url.parse(req.url,true).query;
		var q = url.parse(req.url,true).query;
		var to = q.to ;
		var sub = q.sub ;
		var body = q.body ;
		//res.write(to+sub+body);
		var transporter = nodemailer.createTransport({
			service :'gmail',
	
			auth:{
				user : 'sureshdemo01@gmail.com',
				pass : 'demo@123'
			}
		});
	
		var mailOptions ={
			from : 'sureshdemo01@gmail.com',
			to : to,
			subject : sub,
			text : body
		};
		transporter.sendMail(mailOptions,function(error,info){
			if(error){
				console.log(error);
			}else{
				console.log('Email sent:'+ info.response);
			}
		});

		res.end();
		
			
			
	}
	else{
		res.writeHead(200,{'Content-Type' : 'text/html'});
		res.write('<form action="submit" method="get" enctype="multipart/form-data"> ');
		res.write('<h3>To:</h3><input type="textbox" name="to"><br><br>');
		res.write('<h3>Subject:</h3><input type="textbox" name="sub"><br><br>');
		res.write('<h3>Body:</h3><input type="textbox" name="body"><br><br>');
		res.write('<input type="submit">');
		res.write('</form>')
	}
}).listen(8080);