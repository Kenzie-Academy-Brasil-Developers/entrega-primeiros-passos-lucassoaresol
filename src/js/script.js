let voce                        = 1
let amigo                       = 1

let precoRefrigerante           = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefrigerante      = parseInt(prompt("Quantas unidades ?"))

let precoMacarrao               = parseFloat(prompt("Digite o valor do Macarrão"))
let quantidadeMacarrao          = parseInt(prompt("Quantas unidades ?"))

let precoErvilha                = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha           = parseInt(prompt("Quantas unidades ?"))

let precoArroz                  = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz             = parseInt(prompt("Quantas unidades ?"))

let precoFeijao                 = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao            = parseInt(prompt("Quantas unidades ?"))

let precoVinho                  = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho             = parseInt(prompt("Quantas unidades ?"))

let totalRefrigerante           = precoRefrigerante * quantidadeRefrigerante
let totalMacarrao               = precoMacarrao * quantidadeMacarrao
let totalErvilha                = precoErvilha * quantidadeErvilha
let totalArroz                  = precoArroz * quantidadeArroz
let totalFeijao                 = precoFeijao * quantidadeFeijao
let totalVinho                  = precoVinho * quantidadeVinho

let total                       = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho

let metade                      = total/2

alert(`Valor total da compra: ${total}`)

if(total % 2 == 0){
    voce = metade - totalVinho
    amigo = metade + totalVinho
  }else{
    voce = metade
    amigo = metade
  }

console.log(`Valor total da compra: ${total}. O valor a ser pago por você: ${voce} e o valor a ser pago pelo seu amigo: ${amigo}`)

alert(`O valor a ser pago por você: ${voce} e o valor a ser pago pelo seu amigo: ${amigo}`)

