//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let count=document.getElementById("counter");
button.addEventListener("click",function(){
	let currentvalue=parseInt(count.textContent);
	expect(alertText).to.equal("Current value before increment: 0")
	count.textContent=currentvalue+1;
})