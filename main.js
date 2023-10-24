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

function modelLoaded() {
    console.log("modelo inicializado");
}

function checagem() {
    img=document.getElementById("foto");
    classificadora.classify(img, resultados_obtidos);
} 

function resultados_obtidos(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=(results[0].confidence.toFixed(3)*100)+"%";
    }
}