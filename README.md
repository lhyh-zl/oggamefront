# oggamefront

guide.html  引导页 进度条100%后跳转index.html

index.html  包含了登录窗口，点击“立刻开始”，未登录则弹出登录框。目前静态页面只做了验证码的校验和交互，输入正确的校验码，关闭登录弹窗，同时在页面上方显示用户信息，包含退出按钮。点击退出按钮，取消显示用户信息
    加入了loading效果，使用的是layer.js插件。
    layer.load(1);//加载load层
    layer.closeAll();  //关闭loading层

record.html 记录页面，投注记录和转账记录都可以用这个页面，区别在于页面顶部的文字图标，以及表格内的字段

transfer.html 转账页面

copyrecord.html  文字版记录页面

copytransfer.html  文字版转账页面
