 //function to add new work experience
 function addWEField(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Your Work Experience Here');

    let weOb = document.querySelector(".we");
    let weAddButtonOb = document.querySelector(".weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
 }

 //function to add new academic qualification
 function addAQField(){
   let newNode = document.createElement("textarea")
   newNode.classList.add("form-control");
   newNode.classList.add("aqField");
   newNode.setAttribute("rows",3);
   newNode.setAttribute('placeholder','Enter Your Academic Qualifications Here');

   let aqOb = document.querySelector(".aq");
   let aqAddButtonOb = document.querySelector(".aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
}
//function to add new project
function addNewPJField(){
   let newNode = document.createElement("input")
   newNode.classList.add("form-control");
   newNode.classList.add("pjField");
   newNode.setAttribute('placeholder','Enter Here');

   let pjOb = document.querySelector(".pj");
   let pjAddButtonOb = document.querySelector(".pjAddButton");

   pjOb.insertBefore(newNode,pjAddButtonOb);
}

function generateCV(){

   //parsing the given data in form to template
   let nameField = document.getElementById("nameField").value;
   document.getElementById("nameT1").innerHTML=nameField;
   document.getElementById("nameT2").innerHTML=nameField;
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
   document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
   document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
   document.getElementById("skillT").innerHTML=document.getElementById("skillField").value;
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
   let imgField = document.getElementById("imgField").files[0];

  

   //work experience
   let wes=document.getElementsByClassName("weField");
   let str="";
   for(let e of wes){
      str=str + `<li>${e.value}</li>`;
   }
   document.getElementById("weT").innerHTML = str;

   //academic qualifications
   let aqs=document.getElementsByClassName("aqField");
   let str1="";
   for(let e of aqs){
      str1=str1 + `<li>${e.value}</li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   //projects

   let pjs=document.getElementsByClassName("pjField");
   let str2="";
   for(let e of pjs){
      str2=str2 + `<li>${e.value}</li>`;
   }
   document.getElementById("pjT").innerHTML = str2;
  updateProfilePicture(imgField);
 

  // document.getElementById("cv-form").style.display ='none';
  // document.getElementById("cv-template").style.display ='block';

}

function updateProfilePicture(imgFile) {
   let reader = new FileReader();
   reader.readAsDataURL(imgFile);

   reader.onloadend = function () {
       document.getElementById("imgTemplate").src = reader.result;
   };
}
function printCV(){
   window.print();
}
