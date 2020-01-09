let rtcPeerConnection, localVideo, remoteVideo, localStream;

async function main() {
    localVideo = document.getElementById("local_video");
    remoteVideo = document.getElementById("remote_video");

    localStream = await navigator.mediaDevices.getUserMedia({video: true});
    localVideo.srcObject = localStream;

    rtcPeerConnection = new RTCPeerConnection();
    localStream.getTracks().forEach(track => rtcPeerConnection.addTrack(track));
}

main();
