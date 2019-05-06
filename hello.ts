import request, {Response} from 'request';

request("https://github.com/", (error: any, response: Response, body: any) => {
  console.log(body);
})
