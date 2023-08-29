peterPanSong = "";
harryPotterThemeSong = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
    peterPanSong = loadSound("music2.mp3");
    harryPotterThemeSong = loadSound("music.mp3"); 
} 
 
function setup(){
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    myposenet = ml5.poseNet(video, modalloaded);
    myposenet.on("pose", gotposes)

}

function modalloaded(){
    console.log("modal has been loaded")
}

    function gotposes(results){
        if(results.length > 0){
            console.log(results)
            rightwristX = results[0].pose.rightWrist.x;
            leftwristX = results[0].pose.leftWrist.x;
        
            rightwristY = results[0].pose.rightWrist.y;
            lefttwristY = results[0].pose.leftWrist.y;
        }
        
        }

function draw(){
    image(video,0,0,600,500);
}