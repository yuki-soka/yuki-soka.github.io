$('#detail-elephant').click(function(){

    $('#elephant').slideToggle();

});


$('#detail-lion').click(function(){

    $('#lion').slideToggle();

});

$('#detail-tiger').click(function(){

    $('#tiger').slideToggle();

});

$('#detail-zebra').click(function(){

    $('#zebra').slideToggle();

});

$('#detail-giraffe').click(function(){

    $('#giraffe').slideToggle();

});

$('#detail-chimpanzee').click(function(){

    $('#chimpanzee').slideToggle();

});

$('#detail-koala').click(function(){

    $('#koala').slideToggle();

});

$('#detail-kangaroo').click(function(){

    $('#kangaroo').slideToggle();

});

$('#pageguide').click(function(){

    $('#areaguide').slideToggle(1000);
});


// ここからゲーム↓

$('#choice-tiger').click(function(){

    $('#game-food').slideToggle(500);
});


function feed(food) {

    var foodarray = ['干し草','ユーカリの葉','お肉']
    console.log(foodarray[food]);
    
    if(food == 2){
            $('#result').text("ティガは" + foodarray[food] + "を美味しそうに食べています！ありがとう！");
            $('#baloon').fadeToggle();
        }else{
            $('#result').text("ティガは" + foodarray[food] + "をあまり好きではないようです！他のものをあげてあげてください。。。");
            $('#baloon').fadeToggle();
        }
    
    }





$('#reset').click(function(){

    $('#choice-tiger').show(500);
    $('#choice-kangaroo').show(500);
    $('#choice-zebra').show(500);
    $('#choice-koala').show(500);
    $('#choice-eucalyptus').show(500);
    $('#choice-hay').show(500);
    $('#choice-meat').show(500);
    $('#game-food').hide(500);

});

$('#event-title-elephant').click(function(){

    $('#elephant-event').slideToggle(1000);

});

$('#event-title-giraffe').click(function(){

    $('#giraffe-event').slideToggle(1000);

});

$('#event-title-lion').click(function(){

    $('#lion-event').slideToggle(1000);

});

$('#event-title-kangaroo').click(function(){

    $('#kangaroo-event').slideToggle(1000);

});

$('#event-title-koala').click(function(){

    $('#koala-event').slideToggle(1000);

});