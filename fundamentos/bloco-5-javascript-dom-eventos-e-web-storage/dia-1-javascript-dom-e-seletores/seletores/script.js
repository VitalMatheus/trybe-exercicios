let titulo = document.querySelector('h1');
titulo.style.backgroundColor = 'rgb(65,199,35)';

let urgentes = document.getElementsByClassName('emergency-tasks');
for(let i=0;i<urgentes.length; i+=1){
  urgentes[i].style.backgroundColor = 'rgb(130,33,160');
}
