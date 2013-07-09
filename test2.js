var fs = require('fs');
var outfile = "primes.txt";

var out = [2];
outerloop:
for(i = 3; i < 1000; i++) {
	for(j = 0; j < out.length; ++j) {
		if(i % out[j] == 0) {
			continue outerloop;
		}
	}
	
	out.push(i);
	
	if(out.length == 100) {
		break;
	}
}

fs.writeFileSync(outfile, out.toString());  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);