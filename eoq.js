function calc_eoq(purchasecost,Demand,carrycost)
{
	let tp = purchasecost*Demand
	let bt = carrycost
	let ans = Math.sqrt(tp/bt)
	
return ans
}
console.log(calc_eoq(1,1,1))

