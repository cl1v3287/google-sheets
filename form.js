var scriptURL="https://script.google.com/macros/s/AKfycbxCacFIBs5etNaSza1vSuTmKGsoINuk4j6Owk3ZIAs9Y3MlAm59I3aqPF0H-Hwbovgg0g/exec"
var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('form-alert').innerHTML = "Data was stored")
    .catch(error => document.getElementById('form-alert').innerHTML = "Data was not stored")
})