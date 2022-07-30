function start_classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BSUKxHbHZ/model.json",modelReady);

}
 function modelReady(){
    classifier.classify(gotResults);
 }

  function gotResults(error,results)
  {
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        randomnumber_r=Math.floor(Math.random()*255)+1;
        randomnumber_g=Math.floor(Math.random()*255)+1;
        randomnumber_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear"+results[0].label;
        document.getElementById("Result_Accuracy").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2);
        document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        document.getElementById("Result_Accuracy").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        imgA=document.getElementById("img1");
        imgB=document.getElementById("img2");
        imgC=document.getElementById("img3");
        imgd=document.getElementById("img4");
        if(results[0].label=="clap"){
            imgA.src="aliens-01.gif";
            imgB.src="aliens-02.png";
            imgC.src="aliens-03.png";
            imgd.src="aliens-04.png";
        }
        else if(results[0].label=="cowbell"){
            imgA.src="aliens-01.png";
            imgB.src="aliens-02.gif";
            imgC.src="aliens-03.png";
            imgd.src="aliens-04.png";
        }
        else if(results[0].label=="wistle"){
            imgA.src="aliens-01.png";
            imgB.src="aliens-02.png";
            imgC.src="aliens-03.gif";
            imgd.src="aliens-04.png";
        }
        else{
            imgA.src="aliens-01.png";
            imgB.src="aliens-02.png";
            imgC.src="aliens-03.png";
            imgd.src="aliens-04.gif";
        }
    }
  }