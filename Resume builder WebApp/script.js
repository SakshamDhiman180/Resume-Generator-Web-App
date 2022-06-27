function addNewWeField(){
    //console.log('new row lol');
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", 'Enter here');
    newNode.setAttribute("rows", 3);
    
    let weOB = document.getElementById("we");
    let weAddButtonOb = document.getElementById("webutton")

    weOB.insertBefore(newNode, weAddButtonOb);
}

function addNewaqField(){
    //console.log('new row lol');
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('AqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", 'Enter here');
    newNode.setAttribute("rows", 3);
    
    let weOB = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqbutton")

    weOB.insertBefore(newNode, weAddButtonOb);
}

function addNewpsField(){
    //console.log('new row lol');
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('proField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", 'Enter here');
    newNode.setAttribute("rows", 3);
    
    let weOB = document.getElementById("pc");
    let weAddButtonOb = document.getElementById("probutton")

    weOB.insertBefore(newNode, weAddButtonOb);
}

/// generatiing cv
function generateCV(){
    //console.log('new row lol');

    let nameField=document.getElementById("nameField").value;
    let nameT2=document.getElementById('nameT2');
    let nameT=document.getElementById('nameT');

    nameT.innerHTML=nameField;
    nameT2.innerHTML=nameField;

    document.getElementById('contectT').innerHTML=document.getElementById('PhoneField').value;
    document.getElementById('addressT').innerHTML=document.getElementById('address').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('liT').innerHTML=document.getElementById('liField').value;
    document.getElementById('igT').innerHTML=document.getElementById('instaField').value;
    document.getElementById('objectiveT').innerHTML=document.getElementById('objField').value;

    //we
    let wes=document.getElementsByClassName("weField");
    let str1='';
    for(let e of wes){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str1;

    //aq
    let aqs=document.getElementsByClassName("AqField");
    let str2='';
    for(let e of aqs){
        str2 = str2+ `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str2;

    //pc
    let pcs=document.getElementsByClassName("proField");
    let str3='';
    for(let e of pcs){
        str3 = str3+ `<li> ${e.value} </li>`;
    }
    document.getElementById('pcT').innerHTML=str3;

    //setting img
    let file = document.getElementById('imgField').files[0];
    //console.log(file);

    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //setting img in templete
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    };

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("cv-templete").style.display = "block";
}

function printCV(){
    window.print();
}

function jsongenrate(){
    var jname = $('#nameField').val();
    var jcontect = $('#PhoneField').val();
    var jaddress = $('#address').val();
    var jfb = $('#fbField').val();
    var jli = $('#liField').val();
    var jinsta = $('#instaField').val();
    var jobj = $('#objField').val();
    var jwe = $('#workexp').val();
    var jaq = $('#aqField').val();
    var jpc = $('#projects').val();

    jsonObject={
        "name":"",
        "contect":"",
        "address":"",
        "fb":"",
        "li":"",
        "insta":"",
        "obj":"",
        "we":"",
        "aq":"",
        "pc":""   
    }
    jsonObject.name=jname;
    jsonObject.contect=jcontect;
    jsonObject.address=jaddress;
    jsonObject.fb=jfb;
    jsonObject.li=jli;
    jsonObject.insta=jinsta;
    jsonObject.obj=jobj;
    jsonObject.we=jwe;
    jsonObject.aq=jaq;
    jsonObject.pc=jpc;

    var str=JSON.stringify(jsonObject);
document.write(str);
}