const path = require('path');
const fs = require('fs');
const express = require('express');
// const webpack = require('webpack');
const nodemailer = require("nodemailer");
// 加载body-parser 处理post提交过来的数据
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = express.Router();
// 
app.use('/', express.static('./dist'));
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
app.use('/api', apiRoutes);
app.listen(5050, function() {
    console.info('服务器已启动在', 'localhost:5050');
})
//

let userinfo = {
    info:[
        {
        useremail : '1234567@qq.com',
        username : '郭瑞瑞',
        userpassword : '1234567'
        },
    ],
    total:1
};
let nowuser = {
    useremail : '888844432@qq.com',
    username : 'asdsds',
    userpassword : 'bbbs2233s'
};
let CheckQueue = {
    Queue1:[
        {
            useremail : '123132@qq.com',
            username : '曹志龙',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '李开伟',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '孟祥龙',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '郭瑞瑞',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '葛浩伟',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '段澳琦',
            userpassword : 'bbbss'
        }
    ],
    Queue2:[
        {
            useremail : '123132@qq.com',
            username : '张三',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '李四',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '王五',
            userpassword : 'bbbss'
        }
    ],
    Queue3:[
        {
            useremail : '123132@qq.com',
            username : '小刘',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '小李',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '小王',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '小张',
            userpassword : 'bbbss'
        },{
            useremail : '123132@qq.com',
            username : '小嘎',
            userpassword : 'bbbss'
        }
    ]
};
// 验证码接口
apiRoutes.post('/vemail', function(req, res) {
    let RVid = Math.random().toString();
    let Vid = RVid.substring(RVid.length-4);
    console.log(req.body)
    let Vemail = req.body.Email;
        // Use Smtp Protocol to send Email
        let transporter = nodemailer.createTransport({
            service: 'qq',
            port: 587, // SMTP 端口
            secure: false,
            // secureConnection: true, // 使用 SSL
            auth: {
                user: '910371852@qq.com',
                //这里密码不是qq密码，是你设置的smtp密码
                pass: 'wbpnlbxteujebccg'
            }
        });
        // setup e-mail data with unicode symbols
        let mailOptions = {
            to: Vemail,
            from: '910371852@qq.com', // 这里的from和 上面的user 账号一样的
            subject: 'text', // 标题
            text: '您的验证码：'+ Vid, // 内容
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                res.send("error");
                return console.log(error);
            }
            console.log('验证码邮件已发送: ' + info.response);
            res.send(Vid);
            transporter.close();
        });
});
// 新增用户接口
apiRoutes.post('/adduser', function(req, res) {
    console.log('addUser',req.body)
    let addinfo = req.body;
    let logedlist = userinfo;
    let canadd = true;
    for(let i = 0; i < logedlist.total; i++){
        if(addinfo.useremail == logedlist.info[i].useremail){
            res.send("Muti")
            canadd = false;
        }else{
            canadd = true;
        }
    }
    if(canadd){
        userinfo.info.push(addinfo);
        userinfo.total = userinfo.info.length;
        console.log(userinfo);
        res.send('success');
    }
});
// 登录接口
apiRoutes.post('/login', function(req, res) {
    let loguser = req.body;
    console.log('logUser',loguser)
    let logedlist = userinfo;
    console.log('loglist',logedlist)
    for(let i = 0; i < logedlist.total; i++){
        if(loguser.useremail == logedlist.info[i].useremail && loguser.userpassword == logedlist.info[i].userpassword){
            let nowloger = {
                useremail : loguser.useremail,
                username : logedlist.info[i].username,
                userpassword : loguser.userpassword
            }
            nowuser = nowloger;
            res.send('success');
        }else{
            res.send('error');
        }
    }
});
// 获取所有用户信息接口
apiRoutes.post('/getuserinfo', function(req, res) {
    let reinfo = userinfo;
    res.send(reinfo);
});
// 获取当前登录用户信息接口
apiRoutes.post('/getnowlog', function(req, res) {
    let nowinfo = nowuser;
    res.send(nowinfo);
});
// 队列增加1接口
apiRoutes.post('/queueadd1', function(req, res) {
    let addinfo = req.body;
    CheckQueue.Queue1.push(addinfo);
});
// 队列增加2接口
apiRoutes.post('/queueadd2', function(req, res) {
    let addinfo = req.body;
    CheckQueue.Queue2.push(addinfo);
});
// 队列增加3接口
apiRoutes.post('/queueadd3', function(req, res) {
    let addinfo = req.body;
    CheckQueue.Queue3.push(addinfo);
});
// 队列状态1接口
apiRoutes.post('/checkstatus1', function(req, res) {
    let queue = CheckQueue.Queue1;
    res.send(queue);
});
// 队列状态2接口
apiRoutes.post('/checkstatus2', function(req, res) {
    let queue = CheckQueue.Queue2;
    res.send(queue);
});
// 队列状态3接口
apiRoutes.post('/checkstatus3', function(req, res) {
    let queue = CheckQueue.Queue3;
    res.send(queue);
});
// 队列1下一位接口
apiRoutes.post('/queuenext1', function(req, res) {
    let queue = CheckQueue.Queue1;
    queue.shift();
    CheckQueue.Queue1 = queue;
    res.send(queue);
});
// 队列2下一位接口
apiRoutes.post('/queuenext2', function(req, res) {
    let queue = CheckQueue.Queue2;
    queue.shift();
    CheckQueue.Queue2 = queue;
    res.send(queue);
});
// 队列3下一位接口
apiRoutes.post('/queuenext3', function(req, res) {
    let queue = CheckQueue.Queue3;
    queue.shift();
    CheckQueue.Queue3 = queue;
    res.send(queue);
});
// apiRoutes.post('/prstate', function(req, res) {

// });
// apiRoutes.post('/prstate', function(req, res) {

// });
// apiRoutes.post('/prstate', function(req, res) {

// });
// apiRoutes.post('/prstate', function(req, res) {

// });