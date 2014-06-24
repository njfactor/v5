//Constructor for product class
function product(SrNo,pdName,pdId,pdPrice,dtMfg,dtExp,qty)
{   
    this.SrNo=SrNo;
	this.pdName = pdName;
	this.pdId = pdId;
	this.pdPrice = pdPrice;
	this.dtMfg = dtMfg;
	this.dtExp = dtExp;
	this.qty=qty;
	
    this.remove_item=remove_object;	
}
function remove_object()
{
	var index=this.SrNo-1;

	var temp_arr_start=cart.splice(0,index);
	var temp_arr_end=cart.splice(index+1,cart.length-1);

	temp_arr_start.pop();

	cart=temp_arr_start.concat(temp_arr_end);

	
	
}
//end


//to splice the information
function splitter(qty,rawData)
{
	var info=rawData;
    
	details=info.split(",");
	
	cart_top = cart_top +1; //same as serial number
	
	create_object(cart_top,details[0],details[1],details[2],details[3],details[4],qty);
	addEntry();
}
//end


//function to create an object
function create_object(cart_top,dname,pdid,price,dtmfg,dtexp,qty)
{ 
	price=convert(price);

	total_price+=calc(price,qty);//total to be paid
		
	var tempprod=new product(cart_top,dname,pdid,price,dtmfg,dtexp);
	
	cart.push(tempprod);
}
//end

//creating row
function addEntry()
 {
/* 	var table = document.getElementById('myTable');
	var rows=table.getElementsByTagName('tr');
	var rowCount = rows.length;
	var row = table.insertRow(rowCount)
 
	var data0 = row.insertCell(0);
	var data1 = row.insertCell(1);
	var data2 = row.insertCell(2);
	var data3 = row.insertCell(3);
	var data4= row.insertCell(4);
	var data5= row.insertCell(5);
 	
	data0.innerHTML = cart[rowCount-2].SrNo;
	data1.innerHTML = cart[rowCount-2].pdName;
	data2.innerHTML = cart[rowCount-2].pdId;
	data3.innerHTML = cart[rowCount-2].pdPrice;
	data4.innerHTML = cart[rowCount-2].dtMfg; */
 
	/* var btn = data5.createElement["BUTTON"];
	var t =data5.createTextNode("Delete this item");
	
	btn.appendChild(t);
	data5.body.appendChild(btn); */
	
	var prdiv= document.createElement('div');
	prdiv.className='container';	
	prdiv.id=cart[cart_top-1].SrNo;
	
	var primg_temp = document.createElement('div');
	primg_temp.className='primg';
	var prdetails_temp = document.createElement('div');
	prdetails_temp.className='prdetails';
	var prcost_temp = document.createElement('div');
	prcost_temp.className='prcost';
	
	var temp_pd = document.createElement('img');
	temp_pd.setAttribute("height",'220px');
	temp_pd.setAttribute("src",'temp_pd.jpg');
	primg_temp.appendChild(temp_pd);
	
	var qt_input = document.createElement('select');
	qt_input.setAttribute("id",'quan');
	var op1 = document.createElement('option');
	op1.setAttribute("value",'1');
	op1.innerHTML = "1";
	var op2 = document.createElement('option');
	op2.setAttribute("id",'2');
	op2.innerHTML = "2";
	var op3 = document.createElement('option');
	op3.setAttribute("id",'3');
	op3.innerHTML = "3";
	var op4 = document.createElement('option');
	op4.setAttribute("id",'4');
	op4.innerHTML = "4";
	qt_input.appendChild(op1);
	qt_input.appendChild(op2);
	qt_input.appendChild(op3);
	qt_input.appendChild(op4);
	
var break_temp= document.createElement('div');
	break_temp.innerHTML = "<br/>";
	
	var rm_button = document.createElement('input');
	rm_button.setAttribute("type",'image');
	rm_button.setAttribute("id",'remove');
	rm_button.setAttribute("height",'40px');
	rm_button.setAttribute("src",'delete_button.jpg');
	rm_button.setAttribute("onclick",'cart[cart_top-1].remove_item()');
	rm_button.appendChild(break_temp);
	
	var onlycost = document.createElement('div');
	onlycost.innerHTML = "Rs." + cart[cart_top-1].pdPrice;
	prdetails_temp.innerHTML = cart[cart_top-1].pdName + "<br />ID: " + cart[cart_top-1].pdId + "<br />MRP: Rs." + cart[cart_top-1].pdPrice;
	prcost_temp.appendChild(rm_button);
	prcost_temp.appendChild(qt_input);
	prcost_temp.appendChild(onlycost);
	
	//prcost_temp.innerHTML = "<br/>&nbspCost: " + cart[cart_top-1].pdPrice;
	
	prdiv.appendChild(primg_temp);
	prdiv.appendChild(prdetails_temp);
	prdiv.appendChild(prcost_temp);
	
	
	
	document.getElementById('cart').appendChild(prdiv);
	document.getElementById('cart').appendChild(break_temp);
	
	document.getElementById('total_cost').innerHTML = "Rs." + total_price;
	document.getElementById('total_items').innerHTML = "&nbsp&nbsp&nbsp&nbsp" + cart_top;
 }
 //end

function convert(price)
{
	return parseInt(price);
}


  function calc(price,qty)
{
	return price*qty;
}  

function remove_object()
{
	var index=this.SrNo-1;

	var temp_arr_start=cart.splice(0,index);
	var temp_arr_end=cart.splice(index+1,cart.length-1);

	temp_arr_start.pop();

	cart=temp_arr_start.concat(temp_arr_end);

	cart_top--;
}