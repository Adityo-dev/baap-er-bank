/* DEPOSIT ----------------------------------> */

// Step -1: add event listener to the deposit button
document.getElementById("button-deposit").addEventListener("click", function(){
    
    // step-2 : get the deposite amount form yhe deposit input field
    // always remember to use. value to get text from an input filed
    const depositField = document.getElementById("deposit-field");
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString)


      // step-7 : clear the deposit field
      depositField.value = "";
      
    if(isNaN(NewDepositAmount)){
        alert("Please Provide a valid Number !!!")
        return;
    }

    // step-3: get the current deposit total 
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    

    // step- 4 : add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + NewDepositAmount;

    // set  the deposit total 
    depositTotalElement.innerText = currentDepositeTotal;

    // step-5: get ballance currebnt total 
    const ballanceTotalElement = document.getElementById("balance-total");
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);



    // step- 6: calculate current total balance 
    const NewBalanceTotalAmount = previousBallanceTotal + NewDepositAmount;
    // set balance total 
    ballanceTotalElement.innerText = NewBalanceTotalAmount;

})




/* WITHDRAW ----------------------------------> */

// Step -1: add event listener to the deposit button
document.getElementById("whithdeow-button").addEventListener("click", function(){

    // step-2 : get the deposite amount form yhe whithdeow input field

    const whithdeowField = document.getElementById("whithdeow-Field");
    const NewwhithdeowAmountString = whithdeowField.value;
    const NewWhithdeowAmount = parseFloat(NewwhithdeowAmountString);
    

      // step-7: 
      whithdeowField.value = ""; 

      
    if(isNaN(NewWhithdeowAmount)){
        alert("Please Provide a valid Number !!!")
        return;
    }

    // step-3: 

    const whithdeowTotalElement = document.getElementById("whithdeow-total");
    const previouswhithdeowTotalString = whithdeowTotalElement.innerText;
    const previouswhithdeowTotal = parseFloat(previouswhithdeowTotalString);
    

    // step-5: 
    const ballanceTotalElement = document.getElementById("balance-total");
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);

    

    if(NewWhithdeowAmount > previousBallanceTotal){
        alert("Baap Er Bank a Eto Tk Nai !!");
        return;
    }

      // step-4: 
      const currentwhithdeowTotal = NewWhithdeowAmount + previouswhithdeowTotal;
      whithdeowTotalElement.innerText = currentwhithdeowTotal;
    

    
    // step-6: 
    const NewBalanceTotalAmount = previousBallanceTotal - NewWhithdeowAmount;

    ballanceTotalElement.innerText = NewBalanceTotalAmount;




    
















})







