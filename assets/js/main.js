"user strict";

//buttons
let callBtn = $("#callBtn");

let pc;
let sendTo = callBtn.data("user");
let localStream;

//video elements
const localVideo = document.querySelector("#localVideo");
const remoteVideo = document.querySelector("#remoteVideo");

//mediaInfo
const mediaConst = {
  video: true,
};

function getConn() {
  if (!pc) {
    pc = new RTCPeerConnection();
  }
}

// ask for media input
async function getCam() {
  let mediaStream;

  try {
    if (!pc) {
      await getConn();
    }
    mediaStream = await navigator.mediaDevices.getUserMedia(mediaConst);
    localVideo.srcObject = mediaStream;
    localStream = mediaStream;
    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
  } catch (error) {
    console.log(error);
  }
}

$("#callBtn").on("click", () => {
  getCam();
});

conn.onopen = (e) => {
  console.log("connected to websocket");
};

conn.onmessage = (e) => {};

function send(type, data, sendTo) {
  conn.send(
    JSON.stringify({
      sendTo: sendTo,
      type: type,
      data: data,
    })
  );
}

// send("is-client-is-ready", null, sendTo);
