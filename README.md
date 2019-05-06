TypeScript Node "request" Bundle In Node and Browser with "alias" Demo
======================================================================

`request`是一个node下的http request库，为了让它在浏览器下也能正常运行，在打包为浏览器下的代码时，
使用webpack的alias，将`request`替换为`browser-request`。

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

