function palindromo (palavra){
  palavra = arara;
  let aux='';
  let aux2='';
  for (let index=0; index<palavra.length; index +=1){
    aux += aux[index];
  }
  for (let pal=palavra.length; pal>=0; pal-=1){
    aux2 += palavra.reverse();
  }
  if (aux == aux2){
    return true;
  }else{
    return false;
  }
};