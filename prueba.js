var myArray = [{id:1, name:'John'},{id:2, name:'Rick'},{id:3, name:'Anna'}]
// var eliminarProd = [{id:1, name:'John'},{id:2, name:'Rick'},{id:3, name:'Anna'}]

ide = 4
const eliminarProd = myArray.filter(prod => prod.id !== ide)

if (JSON.stringify(eliminarProd) === JSON.stringify(myArray)) console.log('Id no encontrado')
console.log('id encontrado')
