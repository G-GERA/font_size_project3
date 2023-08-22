noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 400);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

 function modelLoaded()
{
    console.log("poseNet is initilized");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background("#f7bbb7");
    textSize(difference);
    fill("#140201");
    text("Geet", noseX, noseY);


}

