// complete the given function

function palindrome(str){
	str.toLowerCase();
    let i = 0 ;
	let n = str.length-1;
	while(i<n){
		if(str[i]!==str[n]) {
			console.log("false");
			return ;
		}
    }
	console.log("true");
	return ;
}
module.exports = palindrome
