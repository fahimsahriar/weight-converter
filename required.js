let num;
let con_id = 0;
//changing converter
document.getElementById('Change').addEventListener('click', function() {
	go_reset()
    if (con_id === 0) {
    	document.getElementById('converter').innerHTML = 'Kilogram to Pound and Ounces';
    	document.getElementById('in_fo').setAttribute("placeholder", "Enter Weight in KG");
    	document.getElementById('1st_h').innerHTML = 'Pound: ';
    	document.getElementById('2nd_h').innerHTML = 'Ounces: ';    	
    	con_id++;
    }else if (con_id === 1) {
    	document.getElementById('converter').innerHTML = 'Ounces to Pound and Kilo';
    	document.getElementById('in_fo').setAttribute("placeholder", "Enter Weight in Ounces");
    	document.getElementById('2nd_h').innerHTML = 'Kilo: ';
    	con_id++;
    }
    else{
    	document.getElementById('converter').innerHTML = 'Pound to Kilo and Ounces';
    	document.getElementById('in_fo').setAttribute("placeholder", "Enter Weight in Pound");
    	document.getElementById('1st_h').innerHTML = 'Kilo: ';
    	document.getElementById('2nd_h').innerHTML = 'Ounces: ';
    	con_id = 0;
    }
});

//main_function_to_calculate_data
if (con_id === 0) {
	document.getElementById('in_fo').addEventListener('input', function(n) {
    num = n.target.value;
    document.getElementById('1st_result').innerHTML = num / 2.2046;
    document.getElementById('2nd_result').innerHTML = num * 16;
});
}else if (con_id === 1) {
	document.getElementById('in_fo').addEventListener('input', function(n) {
    num = n.target.value;
    document.getElementById('1st_result').innerHTML = num* 2.205;
    document.getElementById('2nd_result').innerHTML = num * 35.274
;
});
}else{
	document.getElementById('1st_result').innerHTML = num / 16;
    document.getElementById('2nd_result').innerHTML = num / 35.274
}

//reset
document.getElementById('reset').addEventListener('click', go_reset);
function go_reset(){
    document.getElementById('in_fo').value = ''
    document.getElementById('1st_result').innerHTML = '0';
    document.getElementById('2nd_result').innerHTML = '0';
}