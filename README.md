TypeScript Webpack Use Alias to Replace Local Files Demo
======================================================================

可以利用tsconfig.json中的`paths`，来为本地某个文件定义一个module name，
然后在webpack中利用alias，（在不同的条件下）将它替换为不同的实现。

## Node

```
npm install
npm run demo-node
```

它可以正常打包、运行、并打印出得到的结果。

## Web

```
npm run demo-web
```

它打包完成后，将在浏览器中打开生成的`dist/index.html`文件，从浏览器的console中可以看到如下错误：

```
Access to XMLHttpRequest at 'https://postman-echo.com/get?hello=request' from origin 'null' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
on the requested resource.
```

说明代码已经正常运行向目标网站发出请求，只是因为浏览器的安全策略被限制。

