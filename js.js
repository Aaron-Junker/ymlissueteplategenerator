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
        outputElement.innerText=`
        name: "`+urlParams.get('Name')+`"
        description: "`+urlParams.get('Description')+`"
        title: "`+urlParams.get('Description')+`"
        labels: [bug, triage]
        assignees:
        - monalisa
        - nat
        issue_body: `+urlParams.get('Issue_body')+`
        body:
        `;
    }else{
        location.href = "index.html"
    }
    
})
