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



// function game(animal) {

//     var animalarray = ['ベンガルトラのティガくん','シマウマのジュリーくん','コアラのリクくん','カンガルーのボブくん'];
//     console.log(animalarray[animal]);

//     $('#animal-p').text(animalarray[animal] + "にえさをあげます。何をあげますか？");

// }

// function feed(food) {

//     var foodarray = ['お肉', '干し草', 'ユーカリの葉']
//     console.log(foodarray[food]);

// }




// function feed(food) {

//     var animalarray = ['ベンガルトラのティガくん','シマウマのジュリーくん','コアラのリクくん','カンガルーのボブくん'];

//     var animal = game(animal)

//     if(food == 0){
//         if(animal == 0){
//             $('#result').text(animalarray[animal] + "は美味しそうに食べています！");
//             console.log(animal)
//         }else{
//             $('#result').text( "あまり好きではないようです！他のものをあげてあげてください。。。");
//         }
    
//     }

// }

// $('#button-meat').click(function(){

//     $('#choice-eucalyptus').hide(500);
//     $('#choice-hay').hide(500);

// });


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






