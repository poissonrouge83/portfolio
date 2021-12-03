$('table div')
    .on('mouseenter', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: -10,
            width: "+=20",
            height: "+=20"
        }, 'fast');
    })
    .on('mouseleave', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: 0,
            width: "-=20",
            height: "-=20"
        }, 'fast');
    })

   function onclick() {
    
    
    let coloneg = document.getElementById("colone-gauche").style;

    coloneg.backgroundColor="red";

    }