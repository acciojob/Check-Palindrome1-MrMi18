// complete the given function

function palindrome(str){
    let i = 0 ;
	let n = str.length-1;
	while(i<n){
		if(str[i]!==str[n]) return false;
    }
	return true;
}
module.exports = palindrome
