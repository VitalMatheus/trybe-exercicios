let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

info.recorrente = 'Sim';


for (let key in info && info2){
  if(info[key] === info2[key]){
    console.log('ambos recorrentes')
  } else{
    console.log(info[key] + ' e ' +  info2[key]);
  }
}
for (let key in info){
  console.log(key);
};

for (let key in info){
  console.log(info[key]);
};

console.log(info);
console.log('Bem vinda, ' + info.personagem)
