// Bob's reversing obfuscator
//https://www.codewars.com/kata/559ee79ab98119dd0100001d/
function decoder(encoded, marker) {
	let start = [];
	let end = [];
	let findMarker = encoded.split(marker);

	for (let i = 0; i < findMarker.length; i++) {
		if (i % 2 !== 0) {
		end.unshift(
			findMarker[i]
			.split("")
			.reverse()
			.join("")
		);
		} else {
		start.push(findMarker[i]);
		}
	}
	let whole = [...start, ...end];
	return whole.join("");
}
