var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    

}
recognition.onresult=function (event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie"){
    speak();

}

}

function speak(){
var synth=window.speechSynthesis;
speak_data="taking your selfie in 5 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach("#cam");
setTimeout(function(){
    take_selfie();
    save();

},5000)
}

var camera=document.getElementById("cam");
Webcam.set({
    width:360,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_selfie(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="mySelfie" src="'+data_uri+'">'; 
    });
}

function save(){
     link=document.getElementById("photo");
     image=document.getElementById("mySelfie").src;
     link.href=image;
     link.click();
}