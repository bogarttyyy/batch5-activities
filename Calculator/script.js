function getNum(num) {
    var disp_var = document.getElementById("display");

    switch (num) {
        case 1:
            disp_var.value += '1';
            break;
        case 2:
            disp_var.value += '2';
            break;
        case 3:
            disp_var.value += '3';
            break;
        case 4:
            disp_var.value += '4';
            break;
        case 5:
            disp_var.value += '5';
            break;
        case 6:
            disp_var.value += '6';
            break;
        case 7:
            disp_var.value += '7';
            break;
        case 8:
            disp_var.value += '8';
            break;
        case 9:
            disp_var.value += '9';
            break;
        case 0:
            disp_var.value += '0';
            break;
    }
}
function clrdisplay() {
    document.getElementById("display").value = "";
    document.getElementById("display-answer").value = "";
}

function getOp(operand) {
    var disp_var = document.getElementById("display");

    switch (operand) {
        case '+':
            disp_var.value += '+';
            break;
        case '-':
            disp_var.value += '-';
            break;
        case '*':
            disp_var.value += '*';
            break;
        case '/':
            disp_var.value += '/';
            break;
    }
}

function compute() {
    var disp_var = document.getElementById("display");
    answer = Math.floor(+eval(disp_var.value));

    document.getElementById("display-answer").value = "=" + answer;
}