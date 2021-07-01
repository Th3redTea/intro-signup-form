const inputs = Object.entries(document.getElementsByTagName('input'))

const button = document.getElementById('form')


function validation(){
    inputs.map(item => {
        let input = item[1];
        let label = input.nextElementSibling;
        let errorSvg = label.nextElementSibling;

        if(input.value == ""){
            input.style.border = "hsl(0, 100%, 74%) 2px solid"
            label.style.visibility = "visible";
            errorSvg.style.visibility = "visible";
        }
    })

    return false
}



// function validation(){

//     if(firstName.innerText == ""){
//         let label = firstName.nextElementSibling; 
//         console.log(label)
//         firstName.
//         label.style.visibility = "visible"
//     }
// }


