
function preload (){
Nariz_De_Palhaco = loadImage("https://i.postimg.cc/MZLCLVLY/nariz-de-palha-o.jpg")
}
function setup (){
canvas = createCanvas(300, 300)
canvas.center();
video = createCapture(VIDEO)
video.size (300,300)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses);//iniciar o poseNet
}
function draw (){
image(video,0,0,300,300)
image(Nariz_De_Palhaco, noseX-15, noseY-15,30,30);
}
function takeSnapshot(){
save("joan.png")

}
function modelLoaded(){
console.log("poseNet já foi inicializado");
}
var noseX = 0;
var noseY = 0;
function gotPoses(results){
    if(results.length > 0){
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
