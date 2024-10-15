const input = document.getElementById('input');
input.value=''

function clc(value) {
    input.value += value; 
    if (value==='C'){
        input.value = ''; 
    }
    if (value==='='){
        try {
            input.value = eval(input.value); 
        } catch (error) {
            input.value = 'Error';
        }
    }
}


// function clc(value) {
// }

// function clc(value) {
//     if (value==='='){
//         try {
//             input.value = eval(input.value); 
//         } catch (error) {
//             input.value = 'Error';
//         }
//     }
// }
