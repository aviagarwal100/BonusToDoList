var add = document.getElementById("add");
var removeAll = document.getElementById("remove");
var list = document.getElementById("list");


removeAll.onclick=function(){
    list.innerHTML=""
}

add.onclick=function(){
    addlist(list);
    document.getElementById("userinput").value="";
    document.getElementById("userinput").focus();    
    // use className in js related thing like react.js or file.js but in normal html we use class only. 
    
}


function addlist(target){
    var inputtext=document.getElementById("userinput").value;
    var li=document.createElement("li");
    var textnode=document.createTextNode(inputtext + "  ");
    var removebutton=document.createElement("button");
    
    
    if(inputtext!==""){
        removebutton.className="btn btn-xs btn-danger";
        removebutton.innerHTML="&times;";
        removebutton.setAttribute('onclick','remove(this)');
        li.appendChild(textnode);
        li.appendChild(removebutton);
        target.appendChild(li);
        
    }
    else{
        alert("Please enter a ToDo");
    }
}


function remove(item){    
    var p=item.parentElement;    
    p.parentElement.removeChild(p);    
}

