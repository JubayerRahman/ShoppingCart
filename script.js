var price0= 0;
const plusButton = document.getElementById("plusButton").addEventListener("click", function(){
    const showText = document.getElementById("showNumber" ,).value
    const showNumber = parseInt(showText)
    const showTotalNumber = showNumber + 1;
    document.getElementById("showNumber").value = showTotalNumber;

    const showText2 = document.getElementById("price3").innerHTML
    const showNumber2 = parseInt(showText2)

    const price1 = document.getElementById("price1").innerHTML;
    const price2 = parseFloat(price1);
    const finalPrice1 = price2 * showTotalNumber;
    document.getElementById("price2").innerHTML = finalPrice1;
    document.getElementById("bigPrice").style.display ="none"
    document.getElementById("bigprice2").style.display ="block";

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalmoney = showNumber2  + finalPrice1 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney;

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;
})


const plusButton2 = document.getElementById("plusButton2").addEventListener("click", function(){
    const showText = document.getElementById("showNumber2").value
    const showNumber = parseInt(showText)
    const showTotalNumber2 = showNumber + 1;
    document.getElementById("showNumber2").value = showTotalNumber2;

    const price1 = document.getElementById("price3").innerHTML;
    const price2 = parseFloat(price1);
    const finalPrice1 = price2 * showTotalNumber2;
    document.getElementById("price4").innerHTML = finalPrice1;
    document.getElementById("bigPrice3").style.display ="none"
    document.getElementById("bigprice4").style.display ="block";

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalmoney = subTotalNumber  + price2 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney


    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;

})

// done of plus

// Start of minus Button

// minus button1
 const minusButton1 = document.getElementById("minusButton1").addEventListener("click", function(){
    const showText = document.getElementById("showNumber").value
    const showNumber = parseInt(showText)
    const showTotalNumber = showNumber - 1;

    if(showNumber ===0) {

        var section =document.getElementById("product1")
    section.style.display ="none"

    const price1 = document.getElementById("price1").innerHTML
    const price2 = parseFloat(price1);

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseInt(subTotal);
    const subTotalmoney = subTotalNumber  - 0 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;

    }
    else{
        document.getElementById("showNumber").value = showTotalNumber;

        const price1 = document.getElementById("price1").innerHTML;
    const price2 = parseFloat(price1);
    const finalPrice1 = price2 * showTotalNumber;
    document.getElementById("price2").innerHTML = finalPrice1;
    document.getElementById("bigPrice").style.display ="none"
    document.getElementById("bigprice2").style.display ="block";

    const showText2 = document.getElementById("price3").innerHTML
    const showNumber2 = parseInt(showText2)

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalmoney = showNumber2  + finalPrice1 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney;

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;
    }


    


 })

// Minus Button2
 const minusButton2 = document.getElementById("minusButton2").addEventListener("click", function(){
    const showText = document.getElementById("showNumber2" ).value
    const showNumber = parseInt(showText)
    const showTotalNumber2 = showNumber - 1;

    if(showNumber ===0){
            var section =document.getElementById("product2")
            section.style.display ="none"
        
            const price1 = document.getElementById("price3").innerHTML
            const price2 = parseFloat(price1);
        
            const subTotal = document.getElementById("subTotal").innerHTML;
            const subTotalNumber = parseInt(subTotal);
            const subTotalmoney = subTotalNumber  - price2 ;
            document.getElementById("subTotal").innerHTML = subTotalmoney
        
            const tax= document.getElementById("tax").innerHTML;
            const taxNumber= parseFloat(tax) ;
            const total = document.getElementById ("total").innerHTML;
            const totalNumber = parseFloat(total);
            const finaltotal = taxNumber + subTotalmoney;
            document.getElementById("total").innerHTML = finaltotal;
            
    }

    else{
        document.getElementById("showNumber2").value = showTotalNumber2;

        const price1 = document.getElementById("price3").innerHTML;
    const price2 = parseFloat(price1);
    const finalPrice1 = price2 * showTotalNumber2;
    document.getElementById("price4").innerHTML = finalPrice1;
    document.getElementById("bigPrice3").style.display ="none"
    document.getElementById("bigprice4").style.display ="block";

    const price3 = document.getElementById("price1").innerHTML;
    const price4 = parseFloat(price3);

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseInt(subTotal);
    const subTotalmoney = subTotalNumber  - (finalPrice1/showTotalNumber2) ;
    document.getElementById("subTotal").innerHTML = subTotalmoney

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;
    }

 })

//  remove button1

const removeButton1= document.getElementById("remove1").addEventListener("click" , function(){
    var section =document.getElementById("product1")
    section.style.display ="none"

    const price1 = document.getElementById("price1").innerHTML
    const price2 = parseFloat(price1);

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseInt(subTotal);
    const subTotalmoney = subTotalNumber  - price2 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;

})
//  remove button2

const removeButton2= document.getElementById("remove2").addEventListener("click" , function(){
    var section =document.getElementById("product2")
    section.style.display ="none"

    const price1 = document.getElementById("price3").innerHTML
    const price2 = parseFloat(price1);

    const subTotal = document.getElementById("subTotal").innerHTML;
    const subTotalNumber = parseInt(subTotal);
    const subTotalmoney = subTotalNumber  - price2 ;
    document.getElementById("subTotal").innerHTML = subTotalmoney

    const tax= document.getElementById("tax").innerHTML;
    const taxNumber= parseFloat(tax) ;
    const total = document.getElementById ("total").innerHTML;
    const totalNumber = parseFloat(total);
    const finaltotal = taxNumber + subTotalmoney;
    document.getElementById("total").innerHTML = finaltotal;
})
