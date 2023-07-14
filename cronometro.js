window.onload = function() {
    let segundos = 0, milisegundo =0
    
    let seg = document.querySelector('#seg')
   let mseg = document.querySelector('#mseg')
   let btnI= document.querySelector('#inicio')
   let btnP= document.querySelector('#parar')
   let btnZ= document.querySelector('#zerar')
   let intervalo

   btnI.onclick = function (){
    clearInterval(intervalo)
    intervalo = setInterval(iContagem, 10) 
   }
   btnP.onclick = function(){
    clearInterval(intervalo)
   }
   btnZ.onclick = function(){
    clearInterval(intervalo)
    milisegundo = "00"
    segundos = "00"
    mseg.innerHTML = milisegundo
    seg.innerHTML = segundos
   }
   function iContagem(){
    milisegundo++
    if(milisegundo <= 9){
        mseg.innerHTML = "0" + milisegundo;
    }
    if(milisegundo > 9){
        mseg.innerHTML = milisegundo
    }
    if(milisegundo > 99){
        segundos++
        milisegundo = 0
        seg.innerHTML = "0" + segundos
        mseg.innerHTML = "0" + milisegundo;
    }
    if(segundos > 9){
        seg.innerHTML = segundos
    }
   }
} 
