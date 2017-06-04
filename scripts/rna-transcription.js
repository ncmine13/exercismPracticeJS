function DnaTranscriber() {
	this.toRna = function(dnaStrand){
		//separate each letter 
		var splitStrand = dnaStrand.split("");

		for (i = 0; i < splitStrand.length; i++){
			if(splitStrand[i] === 'C'){
				splitStrand[i] = 'G';
			} else if (splitStrand[i] === 'G'){
				splitStrand[i] = 'C';
			} else if (splitStrand[i] === 'A'){
				splitStrand[i] = 'U';
			} else if (splitStrand[i] === 'T'){
				splitStrand[i] = 'A';
			} else if(splitStrand[i] != 'C' || splitStrand[i] != 'T' || splitStrand[i] != 'G' || splitStrand[i] != 'T') {
				throw new Error('Invalid input');	
			}
		}
		var rnaStrand = splitStrand.join("");
		return rnaStrand;
	}
} 


module.exports = DnaTranscriber;