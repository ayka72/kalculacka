
const input = document.getElementById('input');

function clc(value) {
    if (value === 'C') {
        input.value = '';
    } else if (value === '=') {
        try {
            input.value = eval(input.value); //eval pro matematicke vyrazy ze stringu
        } catch (error) {
            input.value = 'Error';
        }
    } else {
        input.value += value;
    }
}


function fnc(value){

    if(value==="F1"){

        try{
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }

        let result=input.value%2
        if(result===0){
            input.value="cislo je sude"
        }
        else{
            input.value="cislo je liche"
        }
    }

    if(value==="F2"){

        document.getElementById("kvadr").style.display="grid"

        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        try{
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            input.value = "Zadejte platné hodnoty"; // Kontrola, jestli jsou hodnoty platné
            return;
        }
    
        if (a === 0) {
            input.value = "Hodnota 'a' nemůže být nula"; // Kontrola, jestli je a != 0
            return;
        }
    
        const discriminant = b * b - 4 * a * c; // Vypočítá diskriminant
    
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            input.value = `Kořeny: ${root1.toFixed(2)}, ${root2.toFixed(2)}`; // Výstup kořenů
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            input.value = `Kořen: ${root.toFixed(2)}`; // Výstup jediného kořene
        } else {
            input.value = "Žádné reálné kořeny"; // Žádné reálné kořeny
        }
        
    }
}