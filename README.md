urlcode-json
==============

This is a tool for converting JSON object to an urlencode string like python's urllib.urlencode() method or decode an url to a JSON object.

USAGE&Example
=====

    var urlcodeJson = require('urlcode-json');
    var str_1 = urlcodeJson.encode( { "name" : cashlee" , "language" : "cantonese" } , true );
    console.log( str_1 );//"name=cashlee&language=cantonese"

    var str_2 = urlcodeJson.decode( "name=cashlee&language=cantonese" );
    console.log( str_2 );//{ "name" : cashlee" , "language" : "cantonese" } 

Command-line interface
======================

  coming soon ... 
