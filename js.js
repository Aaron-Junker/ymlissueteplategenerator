// Source: https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}



// If browser doesn't support URLSearchParams it gets redirected to OldBrowser.html
if(!URLSearchParams){
    location.href = "OldBrowser.html"
}

const urlParams = new URLSearchParams(window.location.search);

function copy(){
    var outputElement = document.getElementById("output");

    outputElement.select();
    outputElement.setSelectionRange(0, 999999); 
  
    document.execCommand("copy");


}

function checkParams(){
    // This funtion checks if the parameters are filled out
    return (typeof urlParams.get('Name') !== 'undefined' && typeof urlParams.get('Description') !== 'undefined' && typeof urlParams.get('Issue_body') !== 'undefined');
}

document.addEventListener("DOMContentLoaded",function (){
    var outputElement = document.getElementById("output");
    if(checkParams()){
        outputElement.innerHTML=
`name: "`+urlParams.get('Name')+`"
description: "`+urlParams.get('Description')+`"
title: "`+urlParams.get('Title')+`"
labels: "`+urlParams.get('Labels')+`"
assignees: "`+urlParams.get('Assignees')+`"
issue_body: `+urlParams.get('Issue_body')+`
body:`;
    }else{
        location.href = "index.html"
    }
    
})

function add_textfield(){
    var outputElement = document.getElementById("output");
    var Label = document.getElementsByName("textfield_Label")[0];
    var Description = document.getElementsByName("textfield_Description")[0];
    var Value = document.getElementsByName("textfield_Value")[0];
    var Placeholder = document.getElementsByName("textfield_Placeholder")[0];
    var Id = document.getElementsByName("textfield_Id")[0];
    var Required = document.getElementsByName("textfield_Required")[0];
    outputElement.innerHTML+=
`
- type: input`
if(Id.value!==""){
    outputElement.innerHTML+=`
  id: `+Id.value;
}
outputElement.innerHTML+=
`
  attributes:
    label: "`+Label.value+`"
    description: "`+Description.value+`"
    placeholder: "`+Placeholder.value+`"
    value: "`+Value.value+`"
  validations:
    required: `+Required.value+``;

    Label.value="";
    Description.value="";
    Value.value = ""
    Placeholder.value="";
    Id.value="";
}



function add_markdown(){
    var outputElement = document.getElementById("output");
    var Value = document.getElementsByName("markdown_Value")[0];
    outputElement.innerHTML+=
`
- type: markdown
  value: |
    `+Value.value.replaceAll("\n", "\n    ");
    Value.value = ""
}



function add_textarea(){
    var outputElement = document.getElementById("output");
    var Label = document.getElementsByName("textarea_Label")[0];
    var Description = document.getElementsByName("textarea_Description")[0];
    var Value = document.getElementsByName("textarea_Value")[0];
    var Placeholder = document.getElementsByName("textarea_Placeholder")[0];
    var Render = document.getElementsByName("textarea_Render")[0];
    var Id = document.getElementsByName("textarea_Id")[0];
    var Required = document.getElementsByName("textarea_Required")[0];
    outputElement.innerHTML+=
`
- type: textarea`
if(Id.value!==""){
    outputElement.innerHTML+=`
  id: `+Id.value;
}
outputElement.innerHTML+=
`
  attributes:
    label: "`+Label.value+`"
    description: "`+Description.value+`"
    placeholder: |
       `+Placeholder.value.replaceAll("\n", "\n    ")+`
    value: |
       `+Value.value.replaceAll("\n", "\n    ")+`
`
    if(Render.value!=""){
        outputElement.innerHTML+=`  render: `+Render.value+`
`;
    }
outputElement.innerHTML+=
`  validations:
    required: `+Required.value+``;

    Label.value="";
    Description.value="";
    Placeholder.value="";
    Value.value = "";
    Render.value = "";
    Id.value="";
}