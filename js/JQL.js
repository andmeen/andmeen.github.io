function add(e) {
    let first_no = parseFloat(document.getElementById("first_no").value);
    let second_no = parseFloat(document.getElementById("second_no").value);
    document.getElementById("The_result").value = first_no + second_no;
}

function am() {
    let first_no = parseFloat(document.getElementById("first_no").value);
    let second_no = parseFloat(document.getElementById("second_no").value);
    document.getElementById("The_result").value = first_no - second_no;
}

function bm() {
    let first_no = parseFloat(document.getElementById("first_no").value);
    let second_no = parseFloat(document.getElementById("second_no").value);
    document.getElementById("The_result").value = first_no * second_no;
}

function aq() {
    let first_no = parseFloat(document.getElementById("first_no").value);
    let second_no = parseFloat(document.getElementById("second_no").value);
    document.getElementById("The_result").value = first_no / second_no;
}