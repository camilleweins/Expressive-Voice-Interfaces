var noteArray = ["C4", "E5", "G5", "Bb5"];

var synth = new Tone.PluckSynth().toMaster();

var MusicMaker = {
	play: function(data) {
		var seq = new Tone.Sequence(function(time, word){
			var whichNote = POS2Music[word.tag];
			if (whichNote && whichNote !== 'rest') {
				whichNote = noteArray[whichNote % noteArray.length];
				synth.triggerAttackRelease(whichNote, '8n', time)
			}
		}, data, '4n');
		seq.loop = 0;
		seq.start();
		Tone.Transport.start();
		// var loop = new Tone.Loop(seq, 1).start(0);
	}
}