var dataServer;
var pubKey = 'pub-c-bb1495b0-a9a1-4f33-b4c1-0d5bb876aff7';
var subKey = 'sub-c-2d85f2ba-0cbb-11ea-9d22-32c7c2eb6eff';
var channelName = "flippingBot";

var button1;
var button2;
var button3;
var button4;
// var button5;
var rectH = 1;
var growing = true;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  dataServer = new PubNub({
    publish_key: pubKey,
    subscribe_key: subKey,
    ssl: true
  });

  dataServer.subscribe({
    channels: [channelName]
  });
  
  button1 = createButton('Ball 1');
  button2 = createButton('Ball 2');
  button3 = createButton('Ball 3');
  button4 = createButton('Reset Balls');
  // button5 = createButton('Reset Bottles');
  
  button1.mousePressed(function(){
  dataServer.publish({
      message: {
        x: 0.5,
        y: -0.05,
        which: "ball1"
      },
      channel: 'flippingBot'
    });
  });
  button2.mousePressed(function(){
  dataServer.publish({
      message: {
        x: 0.5,
        y: -0.05,
        which: "ball2"
      },
      channel: 'flippingBot'
    });
  });
  button3.mousePressed(function(){
  dataServer.publish({
      message: {
        x: 0.5,
        y: -0.05,
        which: "ball3"
      },
      channel: 'flippingBot'
    });
  });
  button4.mousePressed(function(){
  dataServer.publish({
      message: {
        reset: "balls"
      },
      channel: 'flippingBot'
    });
  });
  // button5.mousePressed(function(){
  // dataServer.publish({
  //     message: {
  //       reset: "bottles"
  //     },
  //     channel: 'flippingBot'
  //   });
  // });
}

function draw() {
  background(220);

  // rectMode(CENTER);
  // rect(windowWidth / 2, windowHeight / 2, windowWidth / 4, rectH);
  // if (growing) {
  //   if (rectH > windowWidth / 1.5) {
  //     growing = false;
  //   } else {
  //     rectH += 20;
  //   }
  // } else {
  //   if (rectH < 0) {
  //     growing = true;
  //   } else {
  //     rectH -= 20;
  //   }
  // }
  
  
}

// function mousePressed(){
//   console.log("yoo");
//  if(rectH < 200){
//  dataServer.publish({
//       message: {
//         x: 0.003,
//         y: -0.0025
//       },
//       channel: 'flippingBot'
//     });
//  } else {
//  dataServer.publish({
//       message: {
//         yes: "u slipped"
//       },
//       channel: 'flippingBot'
//     });
//  }
// }
