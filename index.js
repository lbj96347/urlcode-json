exports.encode = function ( data , encodeornot ){
  if ( typeof( data ) == 'object' ) {
    var out = new Array();
    for (key in data) {
      out.push(key + '=' + data[key]);
    }
    var finalStr = out.join('&');
    return ( encodeornot ? encodeURIComponent( finalStr ) : finalStr )  
  } else {
    console.warn('error occur');
  }
};

exports.decode = function ( data ){
  if( typeof(data) == 'string' ){
    var str = decodeURIComponent( data );
    var objArr = str.split('&');
    var newobj = {};
    for( var i in objArr ){
      var key = objArr[i].split('=')[0];
      var value = objArr[i].split('=')[1];
      newobj[key] = value;
    }
    return newobj;
  }else{
    console.warn('error occur');
  }
}
