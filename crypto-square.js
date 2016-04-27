var Crypto = function(text){

	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	
	return this.text.replace(/[^\w]/g,"").toLowerCase();

};

Crypto.prototype.size = function(){
	var str = this.normalizePlaintext();
	var length = str.length;
	var size = Math.sqrt(length);
	return Math.ceil(size);
};

Crypto.prototype.plaintextSegments = function() {
	
	var count = this.size();
	var size = count.size;
	var arrayLength = this.text.length;
	var stringLength = Math.floor(arrayLength / count);
	var str = this.normalizePlaintext();
	var loop = stringLength;
	var res = "";
	for (var i = 0; i <= arrayLength; i++) 
	{
		res += str.substring(i,loop) + ",";
		loop +=stringLength;
		i += stringLength - 1;



	}
	var output = res.split(",", stringLength-1);
	return output;

};
Crypto.prototype.ciphertext = function(){

	var string = this.plaintextSegments();
	for (var i = 0; i < this.plaintextSegments.stringLength; i++)
	{
		for(var j = 0; j < stringLength-1; j++)
		{
			var output = output + string[j].substring(i,i+1);
		}
		
	}
	return output;


}
module.exports = Crypto;
