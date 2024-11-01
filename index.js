const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000;  

// 中间件  
app.use(express.json());  // 解析JSON请求  
app.use(express.urlencoded({ extended: true }));  // 解析URL编码的请求  

// 定义路由  
app.get('/', (req, res) => {  
  res.send(./src/index.html);  
});  

app.get('/demo', (req, res) => {  
  res.send(./src/index.html);  
});  