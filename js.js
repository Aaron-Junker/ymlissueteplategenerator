// If browser doesn't support URLSearchParams it gets redirected to OldBrowser.html
if(!URLSearchParams){
    location.href = "OldBrowser.html"
}

const urlParams = new URLSearchParams(window.location.search);

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
- type: Markdown
  value: |
    `+Value.value.replace("\n", "\n    ");
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
    placeholder: |
       `+Placeholder.value.replace("\n", "\n    ")+`
    value: |
       `+Value.value.replace("\n", "\n    ")+`
    `
    if(render.value!=""){
        outputElement.innerHTML+=`render: `+render+`
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