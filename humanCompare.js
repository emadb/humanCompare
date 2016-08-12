/**
 * Compare two string like a human
 *
 * @param str1		First string
 * @param str2		Second string
 * @result			Boolean
 *
 * @author Nicholas Peretti
 */
function humanCompare(str1, str2){
	if (typeof(str1) == "string" && typeof(str2) == "string"){
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();

		var makeEasy = function(s){
			
			var normalize = function(c){
				var charcode = s[i].charCodeAt(0);
				if (charcode < 97 || charcode > 122){
					switch (c){
						case "è":{
							c = "e";
							break;
						}
						case "é":{
							c = "e";
							break;
						}
						case "ì":{
							c = "i";
							break;
						}
						case "ò":{
							c = "o";
							break;
						}
						case "à":{
							c = "a";
							break;
						}
						case "ù":{
							c = "u";
							break;
						}
						default:{
							c = "";
							break;
						}
					}
				}
				return c;
			}
			var result = "";			
			if (typeof(s) == "string"){
				for (var i in s){					
					result += normalize(s[i]);
				}
			}
			return result;
		}
		return (makeEasy(str1).trim() == makeEasy(str2).trim());
	} else {
		throw new Error("Arguments must be strings");
	}
}