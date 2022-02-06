# Chatterbox Server
이번 과제는 클라이언트에서 서버까지의 구조를 알아보는 여정의 일부입니다. 지난번에 만든 Chatterbox client-side app은 이미 만들어진 AWS 서버와 연결했다면, 오늘부터 진행할 스프린트에서는 이전의 서버를 떼어내고 여러분이 Node.js를 사용해 만들 로컬과 연결시킬 것입니다.

새로 만들 서버는 유저가 웹 브라우저에서 접속하고, username를 고르고, 메시지를 보내고, 같은 서버에 접속해있는 모든 유저의 메시지를 읽을 수 있게 해주어야 합니다.

이번 스프린트 역시 여러분이 주도적으로 문제를 해결할 수 있도록 설계되었습니다. 문제를 "어떻게" 해결할지에 관해 생각해보기도 전에 "무엇이" 문제인지를 파악하는 것부터가 시급한 과제가 되는 상황이 많이 발생합니다. 지시사항이 명확하지 않고 해결하기 어려운 문제를 마주해야 하는 상황에서, 생산적으로 고민하고 문제를 차근차근 해결해나갈 수 있도록 하는 도전 의식을 잃지 않기를 바랍니다. 익숙하지 않은 데다가 제대로 작성된 공식문서조차 없더라도 작업의 방향성을 찾고 과제를 완수할 수 있는 능력은 software engineer로서 성공하는 데에 크게 기여해줄 것입니다.

## Project Setting

### 1. what's in this repo
- server/server/basic-server.js 는 아주 잘 문서화 된 HTTP 뼈대 서버 입니다. 코드의 주석은 가이드와 어떻게 실행하는지까지 포함되어 있습니다.
- server/server/request-hanlder.js 는 여러분들이 작업해야 할 코드이며 현재로서는 거의 비어있을 겁니다.
- server/__test__/ 은 [Jest 스펙](https://jestjs.io/)을 가지고 있으며 여러분들의 서버를 확장 해 나감에 따라서 더많은 테스트 스펙들을 작성 하여야 합니다.

### 2. Getting Started

- npm install 을 통해서 package.json에 설정 되어있는 패키지 들을 설치 합니다
- chatterbox-client때 작성하였던 코드를 이번 스프린트 코드에 합칩니다.(테스트 케이스 제외)
- 단, 본인의 코드가 고치는데 시간이 걸린다면 레퍼런스 코드를 활용 하세요. 이번 스프린트의 목적은 서버를 구축하는 것에 있습니다. 클라이언트 코드를 고치는데 시간을 할애하지 마세요.
- 이번 스프린트에서는 요청하는 URL에 깃허브 아이디가 포함되지 않아도 괜찮습니다. /:GithubID/messgae대신 /messages 에 대해 GET, POST 요청 및 해당 요청에 대한 응답을 전송하도록 하세요.

### Bare Minimum Requirements
- Nodemon을 활용해서, 서버 application이 자동으로 재시작 될 수 있도록 셋업 하세요.
- http서버를 시작하기 위해서 NodeJS를 어떻게 사용하는지 학습하고, 어떻게 브라우저에서 서버를 연결 하는지 확인 하세요.(http 서버의 베이스 코드는 server/basic-server.js에 작성 되어 있습니다.)
- 프론트엔드 개발자를 위한 서버 API 문서를 제작 하세요.
- 실질적으로 request를 처리하는 로직은 server/request-handler.js에 작성 되어 있습니다. handler를 basic-server에서 활용 할 수 있도록 export와 require를 활용해서 코드를 작성 하세요. (CommonJS 강의를 참고하세요!)
- chatterbox-client 에서 이미 작성되어있는 코드 중 server URL을 원격 주소(http://52.78.213.9:3000/)가 아닌 나의 로컬 주소 http://localhost:3000/ 로 수정하세요.
- 모든 JEST 테스트를 통과 하세요
  - yarn or npm install 을 통해서 의존 모듈을 설치 하세요
  - root 디렉토리에서 npm test를 통해서 테스트를 실행하세요.
  
### Advanced Challenges
Advanced 콘텐츠는 여러분이 초보 개발자를 넘어 현업 엔지니어에게 기대할 법한 요구사항들로 이뤄져 있습니다. 문제를 해결하려는 시도에 앞서 충분한 컨텍스트가 필요할 수 있습니다. (예를 들어 socket.io를 이용한 요구사항을 충족시키기 위해 Websocket 프로토콜에 대한 지식을 요구할 수 있습니다) 그럼에도 불구하고, 도전해볼만 한 가치가 있으며, 여러분의 현재 수준을 넘어서는 기술적 성취를 도울 것입니다.

- fs 모듈을 이용하여, 서버가 메시지들의 목록을 파일로 저장할 수 있도록 만드세요. 파일로 메시지들이 저장되면, 서버가 재시작하더라도 다시 메시지 목록을 불러올 수 있게 됩니다.
- 여러분의 채팅 앱을 [socket.io](https://www.npmjs.com/package/socket.io)를 이용해 완전히 새롭게 작성해보세요. 이는 HTTP가 아닌, 완전한 실시간 통신을 지원합니다. 따라서 더이상 새로운 메시지를 fetch하기 위해 setInterval을 사용할 필요가 없어집니다.
- 여러분의 서버가 정적 파일, 즉 HTML 및 JavaScript 파일을 제공(serve)할 수 있도록 만들어보세요. 클라이언트 파일을 따로 브라우저에 여는 대신, 단지 URL http://127.0.0.1에 접속할 때, 클라이언트 페이지가 뜨도록 만드는 것이 목표입니다. 이 목표를 달성하기 위해서 fs 모듈이 필요할 것입니다. (fs.readFile)
- 여러분의 공부 여정을 블로그에 기록하세요.

------

# Sprint - Refactor Express

## Refactor Chatterbox Server using Express

### Bare minimum requirements

![](https://images.velog.io/images/gil0127/post/88540f42-586f-4451-9fe2-2e71181f1ad0/22.PNG)
