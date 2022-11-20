
        'use strict';
        console.log('I\'m printing to console!');



    var name = window.prompt('Ex2. What is your name?');
    document.querySelector('#target').innerHTML = 'Hello, ' + name + '!';


    <h1> Exercise 3</h1>
    var int1 = parseInt(window.prompt('Ex3. What is the first integer?'));
    var int2 = parseInt(window.prompt('Ex3. What is the second integer'));
    var int3 = parseInt(window.prompt('Ex3. What is the third integer'));
    const sum1 = int1+int2+int3
    const prod1 = int1*int2*int3
    const ave1 = (int1+int2+int3)/3
    document.querySelector('#target2').innerHTML = 'The sum is, ' + sum1 + '. The product is, ' + prod1 + '. The average is '+ ave1 +'.' ;

    <h1>Exercise 10</h1>
        const numofdice = parseInt(window.prompt('Ex10. What is the number of dice?'))
        const guess= parseInt(window.prompt('Ex10. What is your guess for the sum?'))
        var sum10=0;
        var count=0;
        var random1=0;
        for (let i=0; i<9999; i++){
            for (let j=0; j<numofdice;j++){
               random1= Math.floor(Math.random() * 6 + 1)
               sum10= sum10+ random1
            }
            if (sum10 == guess){
                count=count+1

            }
            sum10=0
        }
        const probability= (count/10000)*100
        document.querySelector('#target10').innerHTML = 'Probability to get sum '+ guess + 'with '+  numofdice + ' is ' + probability.toFixed(2) +'%' ;

    <h1> Exercise 4</h1>
        <p id="target3"></p>
        var name1 = window.prompt('What is your first name?');
        var random = Math.floor(Math.random() * 4)

            if (random == 0) {
                document.querySelector('#target3').innerHTML= 'You are a Gryffindor, ' + name1;
            } else {
                if (random == 1) {
        document.querySelector('#target3').innerHTML= 'You are a Slytherin ' + name1;
            } else {
                if (random == 2)
          document.querySelector('#target3').innerHTML='You are a Ravenclaw ' + name1;
        else {
    document.querySelector('#target3').innerHTML= 'You re a Hufflepuff' + name1
  }
                    }
                }





