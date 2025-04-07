// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/\s/g,'');
    let i = 0 ;
	let n = str.length-1;
	while(i<n){
		if(str[i]!==str[n]) {
			// console.log("false");
			return false ;
		}
		i++;
		n--;
    }
	// console.log("true");
	return true ;
}
module.exports = palindrome
