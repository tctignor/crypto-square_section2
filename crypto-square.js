// create our Crypto class
// it takes a string as an argument
var Crypto = function(text){
	// store the string for use elsewhere
	this.text = text;
};
Crypto.prototype.normalizePlaintext = function() {
	return this.text;
};

module.exports = Crypto

