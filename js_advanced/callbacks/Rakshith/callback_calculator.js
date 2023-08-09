function calculator(num1,num2,op,cb){
    switch(op){
        case "+" :
            let sum = num1 + num2
            cb(num1,num2);
            break;
            case "-" :
                let sub = num1 - num2
                cb(num1,num2);
                break;   
            case "/" :
                    let divide = num1 / num2
                    cb(num1,num2);
                    break;  
            case "*" :
                        let multiply = num1 * num2
                        cb(num1,num2);
                        break;   
        default:
            break;

    }
}

function add(num1,num2){
console.log(num1 + num2);
}

function sub(num1,num2){
    console.log(num1-num2);
    }

    function divide(num1,num2){
        console.log(num1/num2);
        }

     function multiply(num1,num2){
    console.log(num1 * num2);
    }
            
        
    
calculator(1,2,"+",add);
calculator(1,2,"-",sub);
calculator(1,2,"/",divide);
calculator(1,2,"*",multiply);