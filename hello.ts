import request from 'request';

request("https://postman-echo.com/get?hello=request", (error, response, body) => {
  console.log(body);
});
