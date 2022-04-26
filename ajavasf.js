song1="";
song2="";
leftx=0;
rightx=0;
lefty=0;
righty=0;
slw=0;
s1="";
s2="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
     if(results.length>0){
        console.log(results);
        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        slw=results[0].pose.keypoints[9].score;
     }
}
function draw(){
    image(video,0,0,600,500);
    s1=song1.isPlaying();
    if(slw>0.2){
        circle(leftx,lefty,20);
        song1.stop();
        if(s1==false){
            song.play();
            document.getElementById("song").innerHTML="Song name-Peter Pan";
        }
    }
}