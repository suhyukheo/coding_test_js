var coin = [ 500 , 100 ,50 ,10]
var price = 1260
var coin_count = 0

function change(){
  coin.forEach((v,i)=>{
    coin_count+=parseInt(price/v)
    price %=v 
  });
  return coin_count
}

console.log(change())