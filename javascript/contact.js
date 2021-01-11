<!--    function to dispay the field content of the form-->
function onsubmit(event){
    const cform = document.getElementById('form');
    const formInputs = document.getElementsByClassName('formInput');
    event.preventDefault();
    let output = {};

    for(let i=0; i < formInputs.length; i++){
        let name = formInputs[i].id
        output[name] = formInputs[i].value;
    }
    cform.reset()
    console.log(JSON.stringify(output,'\n',2))
}

<!--  make submit button disabled while all the required input are not full   -->
function updateButtonEnabled() {
    var requiredFields = document.getElementById("form").querySelectorAll("[required]");
    var anyMissing = Array.from(requiredFields)
        .some(field => !field.value);
    document.getElementById("submit").disabled = anyMissing;
}

window.addEventListener('load', () => {
    document.getElementById("submit").disabled = true;
    document.getElementById("form").querySelectorAll("[required]")
        .forEach(field => field.oninput = updateButtonEnabled);



    document.getElementById("form").addEventListener('submit',onsubmit);
}, false)

