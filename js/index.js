$(function(){
  // function hex_to_ascii(str1)
  //  {
  // 	var hex  = str1.toString();
  // 	var str = '';
  // 	for (var n = 0; n < hex.length; n += 2) {
  // 		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  // 	}
  // 	return str;
  //  }
  //
  $('.transform').on('click', function(){
    	var hex  = $('.inputForm').val().toString().replace(/\s/g,'');
    	var str = '';
    	for (var n = 0; n < hex.length; n += 2) {
    		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    	}
    	$('.utfText').text(str);
      console.log(str);
  })

})
