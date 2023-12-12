//dom elements hotel
const rooms = document.getElementById("room-no");
const sizes = document.getElementById("roomsize");
const adults = document.getElementById("adults");
const children = document.getElementById("kids");
const durations = document.getElementById("checkduration");
const kidm = document.getElementById("kidsmeal");
const submitbtn = document.getElementById("submitbtn");
const outputtext = document.getElementById('output');
const extrabed = document.getElementById("extrabed");
const promotion = document.getElementById("promo");
const lobtn = document.getElementById("loyaltybtn");
const currentcost = document.getElementById("current");


// dom elements for adventure
const adults2 = document.getElementById("adults2");
const kids2 = document.getElementById("kids2");
const guideadults = document.getElementById("gadults");
const guidekids = document.getElementById("gkids");
const durations2 = document.getElementById("duration2");
const submitbtn1 = document.getElementById("submitbtn2");
const outputtext2 = document.getElementById('output2');
const type = document.getElementById("type");

// add eventlisteners
submitbtn.addEventListener("click", showhotel);
submitbtn1.addEventListener("click", showadven);
lobtn.addEventListener("click", showloyalty);

let roomnumber;
var total;
var total2;
let adultsnumber;
let kidsnumber;
let value;
let roomtype;
let add;
let bed;
let duration;
let loyalty;
let promocode;
let totalcost2;
let cost;

let type2;
let adultsnumber2;
let kidsnumber2;
let duration2;
let adprice;
let pricedue;
let pricedue1;
let gad;
let gkid;
let guide;





initialize();
//initialization
function initialize(){
    
    cost = 0;


    currentcost.innerText = `${cost}`
}

//function for hotel booking    
function showhotel(){
    roomnumber = parseFloat(rooms.value);
    roomtype = sizes.value;
    bed = extrabed.value;
    duration = parseInt(durations.value);
    kidsnumber = parseInt(kidm.value);
    promocode = promotion.value;




    if(roomtype == "single"){
        value = 25000
        
    }else if(roomtype == "double"){
        value = 35000

    }else {
        value = 40000 
    }

    if(bed == "yes"){
        add = 8000

    }else{
        add = 0
    }

    


    var toatl3 = totalcost(); 

    

    total = (roomnumber * value) + add;
    total = (total * duration) + ( kidsnumber * 5000) + toatl3;
    

//promo code

    if(promocode == "Promo123"){
        totalcost2 = total * (95/100)
        alert(`Congratulations you got 5% discount`)

    }else if(promocode ==""){
        
        totalcost2 = total
    }else{
        alert(`Sorry, Invalid voucher number`)
        totalcost2 = total
        
    }

    ad = confirm(`Thank you for booking our hotel \nYour total cost is ${totalcost2}`)

//confirmation

    if(ad){
        outputtext.innerText = `Your total cost for booking is LKR ${totalcost2} `;
    }else{
        outputtext.innerText = `Please make your adjustments `;
    }
}

// function to add totalcost , called in showhotel()

function totalcost(){
    adultsnumber2 = parseInt(adults2.value);
    kidsnumber2 = parseInt(kids2.value);
    duration2 = parseInt(durations2.value);
    gad = parseInt(guideadults.value);
    gkid = parseInt(guidekids.value);
    type2 = type.value

    if(type2 == "local"){
        pricedue =  adultsnumber2 * 5000
        pricedue1 = kidsnumber2 * 2000
        
       
    }else{
        pricedue =  adultsnumber2 * 10000
        pricedue1 = kidsnumber2 * 5000
        
    }

    
    guide = (gad * 1000) + (gkid * 500)
    adprice = (pricedue + pricedue1) * duration2;

   var total2 = adprice + guide;
   return total2;
}





// function for adventure

function showadven(){
    adultsnumber2 = parseInt(adults2.value);
    kidsnumber2 = parseInt(kids2.value);
    duration2 = parseInt(durations2.value);
    gad = parseInt(guideadults.value);
    gkid = parseInt(guidekids.value);
    type2 = type.value

    if(type2 == "local"){
        pricedue =  adultsnumber2 * 5000
        pricedue1 = kidsnumber2 * 2000
        
       
    }else{
        pricedue =  adultsnumber2 * 10000
        pricedue1 = kidsnumber2 * 5000
        
    }

    
    guide = (gad * 1000) + (gkid * 500)
    adprice = (pricedue + pricedue1) * duration2;

    total2 = adprice + guide;

   
    ans = confirm(`Thank you for booking the Diving adventure in our hotel \nYour selection cost is ${total2} LKR` );
    
    if(ans){
        outputtext2.innerHTML = ` The total cost for adventure is LKR ${total2}`;
    }else{
        outputtext2.innerHTML = ` Please make your adjustments in booking adventure`;
    }

}


//function for show loyaltypoints
function showloyalty(){
    roomnumber = parseFloat(rooms.value);
    if(roomnumber > 3){
        loyalty = roomnumber * 20
    }else{
        loyalty = 0
    }

    alert(`You have ${loyalty} loyalty points`)
}