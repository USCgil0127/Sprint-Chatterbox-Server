/*************************************************************

request handler 함수를 여기서 작성합니다.

reuqestHandler 함수는 이미 basic-server.js 파일에서 사용 했지만, 아직 작동하지 않습니다.

requestHandler 함수를 export 하여 basic-server.js 에서 사용 할 수 있게 하세요

**************************************************************/

let messages = { results : [] }

const requestHandler = function (request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);

  
  const headers = defaultCorsHeaders;
  
  headers["Content-Type"] = "text/plain";

  // .writeHead() 메소드의 두번째 인자로는 응답 헤더와 키와 값을 객체 형태로 적어줍니다.
//  response.writeHead(200, headers);
//  response.end("Hello, World!");



  if( request.method === 'OPTIONS' ){
    response.writeHead(200, headers);
    response.end();
  }

  if( request.method === 'GET' && request.url === '/messages' ){

    response.writeHead(200, headers ); // 200 ok
    response.end( JSON.stringify(messages) );
    // 객체를 JSON으로

  }
  else if(request.method === "POST") {

    if(request.url ==="/messages") {
      let body =[];
      request
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end",() => {
        body = Buffer.concat(body).toString();
        // body = JSON.parse(body);
        messages.results.push(JSON.parse(body));
        response.writeHead(201, headers);
        response.end(JSON.stringify( messages ));
        // console.log(result)
      })
      // response.writeHead(201,headers)
      // response.end("no!!!");
    }
  }
  else { // 아니면
      response.writeHead(404, defaultCorsHeaders); // 404(Not found)의 응답 headers를 작성한다.
      response.end(); // 응답을 작성한다.
  }

  
};

// let result = {
//   results : [
//     {
//       username : "Gil",
//       text : "Do my bidding!"
//     }
//   ]
// }

// const requestHandler = function(request, response) {
//   // node server 의 requestHandler는 항상 request, response를 인자로 받습니다.

//   // 또한 http 요청은 항상 요청과 응답이 동반 되어야 합니다.
//   //
//   // 이것들은 요청에 대한 정보를 담고 있습니다. 예를들면, 요청 url과 method 등을 담고 있습니다.
//   //
//   // 기본적인 로그를 작성 하세요
//   //
//   // 간단한 로그를 작성 하는 것은, 서버를 디버깅 하는데 매우 수월하게 해줍니다.
//   // 아래는 모든 리퀘스트의 메소드와 url을 로깅 해줍니다.
//   // eslint-disable-next-line no-console
//   console.log(
//     'Serving request type ' + request.method + ' for url ' + request.url
//   );

//   // 응답을 위한 status 코드입니다.
//   let statusCode = 200;

//   // 기본 CORS 설정이 되어있는 코드 입니다. 아래에 있습니다.
//   // CORS에 대해서는 조금더 알아보세요.
//   const headers = defaultCorsHeaders;
//   // 응답 헤더에 응답하는 컨텐츠의 자료 타입을 헤더에 기록 합니다.
//   headers['Content-Type'] = 'text/plain';

//   // .writeHead() 메소드는 응답 헤더에 해당 key, value 를 적어줍니다.
//   // response.writeHead(statusCode, headers);

//   // 노드 서버에 대한 모든 요청은 응답이 있어야 합니다. response.end 메소드는 요청에 대한 응답을 보내줍니다.
//   // response.end('Hello, World!!!?');
//   if(request.method === "OPTIONS") {
//     response.writeHead(statusCode, headers);
//     response.end();
//   }
//   if(request.method === "GET") {
//     if(request.url === "/messages") {
//       // console.log("dfafas?")
//       response.writeHead(statusCode, headers)
//       response.end(JSON.stringify(result));
//       // console.log(result)
//     }    
//     else{
//       // 왜 값이 여기에 갇히는걸까요?
//       statusCode = 404;
//       response.writeHead(statusCode, headers)
//       response.end("여기 아니야...위로 가 친구야");
//     }
//   }
//   else if(request.method === "POST") {
//     if(request.url ==="/messages") {
//       let body =[];
//       request
//       .on("data", chunk => {
//         body.push(chunk);
//       })
//       .on("end",() => {
//         body = Buffer.concat(body).toString();
//         // body = JSON.parse(body);
//         result.results.push(JSON.parse(body));
//         response.writeHead(201, headers);
//         response.end(JSON.stringify(result));
//         // console.log(result)
//       })
//       // response.writeHead(201,headers)
//       // response.end("no!!!");
//     }
//     else{
//       statusCode = 404;
//       response.writeHead(statusCode, headers)
//       response.end();
//     }
//   }
//   else {
//     statusCode = 404;
//     response.writeHead(statusCode, headers);
//     response.end();
//   }  
// };



// const requestHandler = function (request, response) {


  // if(request.method === 'OPTIONS') { // 메소드가 OPTIONS이면 
  //   response.writeHead(200, defaultCorsHeaders); // 200(OK)의 응답 headers를 작성한다.
  //   response.end(); // 응답을 작성한다.
  // }

  // if(request.method === 'GET' && request.url === '/messages') { // 메소드가 GET이면서 url이 messages이면
  //   response.writeHead(200, defaultCorsHeaders); // 200(OK)의 응답 headers를 작성한다.
  //   response.end(JSON.stringify(messages)); // message를 문자열한 응답을 작성한다.
  // } else if(request.method === 'POST' && request.url === '/messages') { // 메소드가 POST이면서 url이 messages이면
  //   request.on('data', (chunk) => {
  //     messages.results.push(JSON.parse(chunk.toString())); // messages의 results에 push한다.
  //   });
  //   request.on('end', () => {
  //     response.writeHead(201, defaultCorsHeaders); // 201(Created)의 응답 headers를 작성한다.
  //     response.end(JSON.stringify(messages)); // message를 문자열한 응답을 작성한다.
  //   });
  // } else { // 아니면
  //     response.writeHead(404, defaultCorsHeaders); // 404(Not found)의 응답 headers를 작성한다.
  //     response.end(); // 응답을 작성한다.
  // }
// }


const defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  // 
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
  // 10초 동안은 옵션이 체크를 안 하는 채로 POST 나 get 등을 사용할 수 있다.
  // 내가 먼저 가서 요청해서, 허용 해줄지 안 해줄지 알아오기
};
// (url === '/lower') 얘는 폴더가 아니고, 식별자!!

module.exports = requestHandler;
// basic-server 에서 사용할 수 있게 보내주자


// // 일단 미니 노드로 따라서 해봤다.
// const messages = { results : [] };

// const requestHandler = function(request, response) {
  
//   console.log(
//     "Serving request type " + request.method + " for url " + request.url
//   );

//   console.log("req.url", request.url, "req.method", request.method);

//   // 응답을 위한 status 코드입니다.
//   const statusCode = 200;

//   const headers = defaultCorsHeaders;

//   // 응답 헤더에 응답하는 컨텐츠의 자료 타입을 헤더에 기록 합니다.
//   headers["Content-Type"] = "application/json";

//   // .writeHead() 메소드는 응답 헤더에 해당 key, value 를 적어줍니다.
//   response.writeHead(statusCode, headers);

//   if (request.method === "OPTIONS") {
//     response.writeHead(statusCode, defaultCorsHeaders);
//     response.end();
//   } else if (request.method === "GET") {
//     if (request.url === "/messages") {
//       const data = JSON.stringify(messages);
//       response.end(data);
//     } else {
//       status = 404;
//       response.writeHead(status, defaultCorsHeaders);
//       response.end();
//     }
//   } else if (request.method === "POST") {
//     if (request.url === "/messages") {
//       let body = "";
//       status = 201;
//       response.writeHead(status, defaultCorsHeaders);
//       request
//         .on("data", chunk => {
//           body += chunk;
//         })
//         .on("end", () => {
//           const data = JSON.parse(body); // body 객체 -> data를 json.parse를 통해 사용 할 수 있게 만들어준다.
//           messages.results.push(data);
//           response.end(JSON.stringify(data)); // 
//         });
//     } else {
//       status = 404;
//       response.writeHead(status, defaultCorsHeaders);
//       response.end();
//     }
//   } else {
//     status = 404;
//     response.writeHead(status, defaultCorsHeaders);
//     response.end();
//   }
//   // 노드 서버에 대한 모든 요청은 응답이 있어야 합니다. response.end 메소드는 요청에 대한 응답을 보내줍니다.
// };