const total = document.getElementById("totall");
const Tip = document.getElementById("tip");
const TotalOutput = document.getElementById("final");
const Display = document.getElementById("display")

function Final(){
Totalbill = total.value;
Tipvalue = Tip.value;

if(Tipvalue<=100 & Totalbill<=9999999){
    FinalTip =(Totalbill/100)*Tipvalue;
    a = Math.round(FinalTip)
Display.innerHTML = `${a}`
}
if(Totalbill>9999999){
Display.innerHTML = "Sorry It Doesn't Work..."
}
if (Tipvalue>100){
    Display.innerHTML = "The Tip Percentage Should Be Below 100" 
}
if(Display.innerHTML === "NaN"){
    Display.innerHTML = "Please Enter Numbers Not Text..."
}
if((Totalbill=="" || Totalbill ==null) && (Tipvalue=="" || Tipvalue ==null)){
    Display.innerHTML = "Please Enter Both Values"
}

}

