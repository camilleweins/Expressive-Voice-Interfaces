	var myRec = new p5.SpeechRec(); // new P5.SpeechRec object

	function setup()
	{
		// graphics stuff:
		createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		// instructions:
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);
		myRec.onResult = showResult;
		myRec.start();
	}

	function showResult()
	{
		if(myRec.resultValue==true) {
			background(192, 255, 192);
			var textVis =  text(myRec.resultString, width/2, height/2);
			// textBox.createDiv(textBox).addClass('text-field');
			// var textBox = createDiv(myRec.resultString).addClass('text-field');
			var textBox = document.getElementById('text-field');
			textBox.innerHTML += myRec.resultString;
			// text(myRec.resultString, width/2, height/2);
			console.log(myRec.resultString);
		}
	}