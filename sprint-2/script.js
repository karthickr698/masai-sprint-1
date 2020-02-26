var arr = [];
var count = 0;
var amount = 0;
var addItem = document.getElementById('add');
addItem.addEventListener('click' , function(){
    var day = document.getElementById('day').value;
    var name = document.getElementById('item').value;
    var quantity = document.getElementById('quantity').value;
    if(quantity<1) {
        alert("Invalid Input");
    }
    else {
        var rate = menu(name);
        var added = new change(name, quantity, rate);
        arr.push(added);
        box(day, added);
    }
});
function change(name , quantity, rate) {
    this.name = name;
    this.quantity = quantity;
    this.rate = rate;
}
function box(day, added) {
    var box = document.querySelector('.box-2');
    var total = added.quantity * added.rate;
    amount = amount + total;
    if(count == 0) {
        var b= document.createElement('div');
        b.textContent = day;
        box.appendChild(b);
        var bill = document.createElement('input');
        bill.setAttribute('type' , 'submit');
        bill.setAttribute('id' , 'submit');
        bill.setAttribute('value' , 'Generate Bill');
        box.appendChild(bill);
        var pay = document.getElementById('submit');
        pay.addEventListener('click' , function(){
            generateBill(arr, day, generate);
        });        
        count++;
    }
    var pay = document.getElementById('submit');
    var details = document.createElement('div');
    details.textContent = added.name + " : " + added.quantity + " * "+added.rate+" = " + amount;
    box.insertBefore(details, pay);
}
function menu(name) {
    var rate = 0;
    if(name == "Panner Butter Masala" || name == "Gobi Rice") {
        rate = 95;
    }
    else if(name == "Kadai Panner" || name == "Panner Tikka") {
        rate = 110;
    }
    else if(name == "Mushroom Masala" || name == "Gobi Manchurian") {
        rate = 120;
    }
    else if(name == "Fried Rice" || name == "Gobi Masala") {
        rate = 140;
    }
    else if(name == "Gobi 65" || name == "Gobi Fry") {
        rate = 1350;
    }
    else if(name == "Naan") {
        rate = 35;
    }
    else{
        rate=40;
    }
    return rate;
}
function generateBill(arr, day, generate) {
    var amo = 0;
    var tot=0;
    //var discount = calculate();
    for(var i = 0; i < arr.length; i++) {
        amo = amo + Number(arr[i].quantity * arr[i].rate);
    }
    tot=amo;
    var discount=0
    if(tot>100)
    {
        discount=calculate;
    }
    var tips = amo * 0.1;
    var tax = amo * 0.2;
    amo = amo + tips + tax - (amo * discount);  
    generate(tot,amo , discount , tips , tax, day);

}
function calculate() {
    var max = 0.5;
    var min = 0.3;
    var disc = Math.floor(Math.random() * (max - min)) + min;
    return disc;
}
function generate(tot,finalAmount, discount , tips , tax, day) {
    var l1="Total Amount : "+tot;
    var tip = "Tip Amount On Your Total : " + tips;
    var taxes = "Tax : " + tax;
    var fa = "Final Amount : " + finalAmount;   
    var pdiv = document.querySelector('.display');
    var para = document.createElement('h2');
    para.textContent = l1;
    pdiv.appendChild(para);
    if(tot>100)
    {
        var daydis = "Its " + day + " You Got Discount of " + Math.floor(discount*100) + "% On Your Total Amount";
        var para1 = document.createElement('h2');
        para1.textContent = daydis;
        pdiv.appendChild(para1);
    }
    var para2 = document.createElement('h2');
    para2.textContent = tip;
    pdiv.appendChild(para2);
    var para3 = document.createElement('h2');
    para3.textContent = taxes;
    pdiv.appendChild(para3);
    var para4 = document.createElement('h2');
    para4.textContent = fa;
    pdiv.appendChild(para4);
    var hr = document.createElement("hr");
    pdiv.appendChild(hr);
}