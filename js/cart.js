$(function(){
	function addcookie(key, value, days) {
		var d = new Date();
		d.setDate(d.getDate() + days);
		document.cookie = key + '=' + encodeURI(value) + ';expires=' + d;
	}
	function getcookie(key) {
		var arrcookie = decodeURI(document.cookie).split('; ');
		for(var i = 0; i < arrcookie.length; i++) {
			var newarrcookie = arrcookie[i].split('=');
			if(newarrcookie[0] == key) {
				return newarrcookie[1];
			}
		}
	}
	function delcookie(key) {
		addcookie(key, '', -1);
	}
	
})
