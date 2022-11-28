function abc(a) {
    console.log(a);
};

var firstnameinput = document.getElementById('firstname');
var lastnameinput = document.getElementById('lastname');
var ftrnameinput = document.getElementById('ftrname');
var cnicinput = document.getElementById('cnic');
var cntctinput = document.getElementById('cntct');
var pswrdinput = document.getElementById('pswrd');

function mkc() {
    var t = firstnameinput.value;
    var m = lastnameinput.value;
    var n = ftrnameinput.value;
    var d = cnicinput.value;
    var b = cntctinput.value;
    var w = pswrdinput.value;
    console.log(firstnameinput.value);
    console.log(lastnameinput.value);
    console.log(ftrnameinput.value);
    console.log(cnicinput.value);
    console.log(cntctinput.value);
    console.log(pswrdinput.value);
}