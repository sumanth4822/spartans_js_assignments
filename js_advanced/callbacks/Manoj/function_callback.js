//Callback Function
// function myfirst(cb){
//     cb();
// }
// myfirst(mysecond);

// function mysecond(){
//     console.log("This is MY2nd");
// }


//-------------------------------------------------------------------------------------------------------------
//Callback Function using Function expression
// function myfirst(cb){
//     cb();
// }


// let f1 = function mysecond(){
//     console.log("This is MY2nd");
// }

// myfirst(f1);            //Hoisting is taken into account

//-------------------------------------------------------------------------------------------------
//Callback Function using Arrow Function
// function myfirst(cb){
//     cb();
// }

// var f = () => {
//     console.log("This is MY2nd");
// }
// myfirst(f);       //Hoisting is taken into account

//--------------------------------------------------------------------------------------------------------

// function calculator(num1,num2,cb){
//     return sum = num1 + num2;
//     cb(sum);
// }
//  function display(value){
//    console.log(value);
// }
// calculator(2,3,display)

//--------------------------------------------------------------------------------
function calculator(num1,num2,op,cb){
    switch(op){
        case "+":
            cb(num1,num2);
            break;

        case "*":
            cb(num1,num2);
            break;

            default:
                break;
    }

}


function Add(num1,num2){
    console.log(num1+num2);
}

calculator(4,2,"+",Add)

function Multiply(num1,num2){
    console.log(num1*num2);
}
calculator(5,10,"*",Multiply)