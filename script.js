
var olObject = document.getElementById("unorderd");

function addItem(){
    var olObject = document.getElementById("unorderd");
    var listText; 
    var listlen = document.getElementById("unorderd").getElementsByTagName("li").length + 1;
    listText = "<li>" + listlen + "th Item" + "</li>";
    olObject.innerHTML += listText;
}

function itemSelected(id){
    var itemList = document.getElementById("unorderd").getElementsByTagName("li");
    for(let i=0;i < itemList.length; i++){
        itemList[i].style.backgroundColor = 'white';
    }
    
    if(document.getElementById(id).style.backgroundColor == 'pink'){
        document.getElementById(id).style.backgroundColor ='white' ;
    }else{
        document.getElementById(id).style.backgroundColor = 'pink';
    }

    var itemObj = document.getElementById('item')
    var itemName = document.getElementById(id).innerHTML

    itemObj.innerHTML = itemName;

    // var bcolors = document.getElementById('unorderd').style.backgroundColor;
    // window.alert(bcolors);
    // console.log(bcolors);
}