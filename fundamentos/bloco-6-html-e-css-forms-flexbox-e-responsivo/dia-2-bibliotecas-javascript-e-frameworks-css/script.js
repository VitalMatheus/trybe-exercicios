let states = ['Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará','Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal', 'DF']

let selectState = document.getElementById('uf');

function selectStateBrazil(){
  for (let i=0; i<states.length; i+=1){
    let itemList = document.createElement('option');
    itemList.innerText = states[i];
    selectState.appendChild(itemList);
  }
}
selectStateBrazil();

// function xablau(event){
//   event.preventDefault();
// }
