
//let numberValue = (n * ( n + 1 ) / 2 )


var drawTriangles = function (n) {

    var count = 0;
    var dot  = '*'; 
    var dots = '';

    for(var i=0; i<n; i++){
        dots+=dot;
    }

    while(count <= n){
        console.log(dots.substr(0, count));
        count++;
    }

};

drawTriangles(10);
