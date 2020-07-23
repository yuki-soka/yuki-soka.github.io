function janken(myhand){

// じゃんけんの手を格納する配列を用意する
    var handarray = ['グー','チョキ','パー'];
    console.log(handarray[myhand]);

// コンピュータの手をランダムに決める
//　Math.random(０以上１未満の擬似乱数を返す)
    var random = Math.random()*100;
    console.log(random)    

//　Math.floorは、与えられた引数以下の最大の性数を返す
    var randomNum = Math.floor(random);
    console.log(randomNum);

//　乱数からコンピュータの手を決める(乱数を3で割った余を使う)
    var computerHand = randomNum % 3;
    console.log(computerHand);

    var result = (myhand - computerHand + 3) %3;

    var messageArray =['あいこです','あなたの負けです','あなたの勝ちです']


    // alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なので" + messageArray[result]);

    // $('#janken-result').append("<p>あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なので" + messageArray[result]+"</p>");

    $('#janken-result-p').text("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なので" + messageArray[result]);


//　人間の手とコンピュータのてを比較して勝敗を判断する
    // if(myhand == 0){
    //     if(computerHand == 0){
    //         alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであいこです");
    //     }else if(computerHand == 1){
    //         alert("あいこです" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであなたの勝ちです");
    //     }else if(computerHand == 2){
    //         alert("あいこです" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのでコンピュータの勝ちです");
    //     }


    // }

    // if(myhand == 1){
    //     if(computerHand == 0){
    //         alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのでコンピュータの勝ちです");
    //     }else if(computerHand == 1){
    //         alert("あいこです" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであいこです");
    //     }else if(computerHand == 2){
    //         alert("あいこです" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであなたの勝ちです");
    //     }


    // }

    // if(myhand == 2){
    //     if(computerHand == 0){
    //         alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであなたの勝ちです");
    //     }else if(computerHand == 1){
    //         alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのでコンピュータの勝ちです");
    //     }else if(computerHand == 2){
    //         alert("あなたの手は" + handarray[myhand] + "、コンピュータは" + handarray[computerHand] + "なのであいこです");
    //     }

    // }


}
