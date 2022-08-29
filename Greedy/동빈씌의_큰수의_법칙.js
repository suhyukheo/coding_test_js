/**동빈 씌 의 법칙 */
// n > 2 , k > 1 , m > 1
let  m = 8
let  k = 3
let  datalist = [6,5,5,4]
async function big_num(m,k,n){
  let fir = n[n.length -1]
  let sec = n[n.length -2]
  let result = 0 
  while(1){
    for(let i =0 ; i<k ; i++){
      result +=fir
      m-=1
      if(m==0) return result 
    }
    result +=sec
    m-=1
    if(m==0) return result
  }
}

big_num(m,k,datalist.sort((a,b)=>{return a-b})).then((result)=>{ console.log(result)}) 

