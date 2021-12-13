function calc_eoq(purchasecost,Demand,carrycost,time)
{
	let tp = 2*purchasecost*Demand
	let bt = carrycost*time
	let ans = Math.sqrt(tp/bt)
	
return ans
}
console.log(calc_eoq(1,1,1,1))

