// Cloud 함수를 생성하고 트리거를 설정하기 위한 Firebase SDK의 클라우드 함수
const functions = require('firebase-functions');

// Nuxt 클래스 모듈 로드
const {
  Nuxt
} = require('nuxt');

// Express 앱 객체 생성
const express = require('express');
const app = express();

// Nuxt 객체 생성
const nuxt = new Nuxt({
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
  // buildDir: '../functions/nuxt',
  // build: {
  //   publicPath: '/assets/',
  //   extractCSS: true,
  //   // ...
  // }
});

// Express앱 핸들 함수 정의
function handleRequest(req, res) {
  res.set('Cache-Control', 'public, maxage=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

// Express앱에서 핸들 함수를 사용하도록 설정
app.use(handleRequest);

// 런타임 옵션 정의
const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '1GB'
};

// 프로젝트 내보내기
// exports. < 프로젝트_이름 > = functions.runWith(runtimeOpts).https.onRequest(app);
exports.ratgi = functions.runWith(runtimeOpts).https.onRequest(app);