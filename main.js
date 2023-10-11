//https://teachablemachine.withgoogle.com/models/[...]//
var img
Webcam.set({
   width:350,
   height:300,
   image_format:"png",
   png_quality:90 
});

var camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot() {
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML="<img id='foto' src='"+datauri+"'>";
    });
}

console.log("versão ml5:", ml5.version);

var classificadora=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/model.json", modelLoaded);