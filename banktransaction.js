document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositinput = document.getElementById('deposit-input');
    const depositamount = depositinput.value;
    
    const deposittotal = document.getElementById('deposit-total');

    const previousdepositamount = deposittotal.innerText;
    const newdepositamount = parseFloat(previousdepositamount) + parseFloat(depositamount) ;

    deposittotal.innerText = newdepositamount;

    depositinput.value = ""; 

    // Blanace update 

    const balancetotal = document.getElementById('final-balance');
    const previousblanacetotal = parseFloat(balancetotal.innerText);

    const newbalancetotal = previousblanacetotal + parseFloat(depositamount);

    balancetotal.innerText = newbalancetotal;
})

// Handle Withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawinput = document.getElementById('withdraw-input');
    const newwithdrawamount = parseFloat(withdrawinput.value);
   
    const withdrawtotal = document.getElementById('withdraw-total');
    const previouswithdrawtotal = parseFloat(withdrawtotal.innerText);
  

    const newwithdrawtotal = newwithdrawamount + previouswithdrawtotal;

    withdrawtotal.innerText = newwithdrawtotal;

    withdrawinput.value =  "";

    const balancetotal = document.getElementById('final-balance');
    const previousblanacetotal = parseFloat(balancetotal.innerText);

    const newblanacetotal = previousblanacetotal - newwithdrawamount;

    balancetotal.innerText = newblanacetotal;


})