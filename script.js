//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let count=document.getElementById("counter");
button.addEventListener("click",function(){
	let currentvalue=parseInt(count.textContent);
	 alert(currentvalue);
	count.textContent=currentvalue+1;
})