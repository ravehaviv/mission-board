onload();

function onload(){
    document.getElementById("inputbox").focus();
    const storage =getmissionfromstorage();
    display(storage);
}


function main(){

    const val =valdition();
    if(!val)return;


    const storage =getmissionfromstorage();
    
    const getvalue = valueuser();

    storage.push(getvalue);

    addtolocal(storage);

    display(storage);
    clear();

}


function valdition(){

    const inputbox = document.getElementById("inputbox") ;
    const datebox = document.getElementById("datebox");
    const hourbox = document.getElementById("hourbox");


    const input = inputbox.value ;
    const date = datebox.value ;
    const hour = hourbox.value ;

    if(input===""){
        alert("Enter Your Mission!");
        inputbox.focus();
        return false;
    }
    
    if(date===""){
        alert("Enter Your Date!");
        datebox.focus();
        return false;
    }
    if(hour===""){
        alert("Enter Your Hour!");
        hourbox.focus();
        return false;
    }
    return true;

}


function getmissionfromstorage(){

    const storage = localStorage.getItem("mession");
    const check = (storage===null)?[]:JSON.parse(storage);
    return check;
}


function valueuser(){

    const inputbox = document.getElementById("inputbox").value ;
    const datebox = document.getElementById("datebox").value ;
    const hourbox = document.getElementById("hourbox").value ;


    const arr = {inputbox,datebox,hourbox};
    return arr;
   
}

function addtolocal(storage){

    const str = JSON.stringify(storage);
    localStorage.setItem("mession",str);
}


function display(storage){

    const inputbox = document.getElementById("inputbox");
    const datebox = document.getElementById("datebox") ;
    const hourbox = document.getElementById("hourbox") ;
    const sectinbox = document.getElementById("sectinbox") ;

    const input = inputbox.value;
    const date = datebox.value;
    const hour = hourbox.value;

    let x = 0;

    sectinbox.innerHTML = "";

    for(const obj of storage){

        sectinbox.innerHTML += `<div class="notepad">
        <div class="data">
        <div class="inputbox"><p>${obj.inputbox}</p></div> <br>
       <div class="datebox"> ${obj.datebox}</div><br>
        <div class="hourbox">${obj.hourbox}</div><br>
        <button onclick="erase(${x})" class="erase  gg-close"></button> 
        </div>
        </div>`;

        x++;
    }


}

function clear(){
    document.getElementById("inputbox").value="";
    document.getElementById("datebox").value="" ;
    document.getElementById("hourbox").value="" ;
    document.getElementById("inputbox").focus();
}


function erase(x){
    
   const getlocall =getmissionfromstorage();
   getlocall.splice(x,1);
   addtolocal(getlocall);
   display(getlocall);
}