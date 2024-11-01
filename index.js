const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000;  

// 中间件  
app.use(express.json());  // 解析JSON请求  
app.use(express.urlencoded({ extended: true }));  // 解析URL编码的请求  

// 定义路由  
app.get('/', (req, res) => {  
  res.send('欢迎来到首页！');  
});  

app.get('/about', (req, res) => {  
  res.send('关于我们页面');  
});  

// 动态路由示例  
app.get('/users/:id', (req, res) => {  
  const userId = req.params.id;  
  res.send(`用户ID是：${userId}`);  
});  

// POST 请求示例  
app.post('/users', (req, res) => {  
  const user = req.body;  
  res.send(`新用户创建：${JSON.stringify(user)}`);  
});  

// 启动服务器  
app.listen(PORT, () => {  
  console.log(`服务器正在运行于 http://localhost:${PORT}`);  
});
window.onload = function () {
  document.getElementById('main-content').innerHTML = 'Github Page demo,lightearth love you!'
}