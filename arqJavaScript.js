let numero = document.getElementById('numTxt')
let tab = document.getElementById('seltab')
let res = document.getElementById("res")
let vetorNum = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if( isNumero(numero.value) && !inLista(numero.value, vetorNum)){
        vetorNum.push(Number(numero.value))
        let item = document.createElement('option') //cria a sessão de html dinamicamente em JS
        item.text = `Valor ${numero.value} adicionado`
        tab.appendChild(item) //cria um novo item 
        res.innerHTML = ''
    }
    else{
       alert("invalido")
    } 
    //apaga e volta no cursor
    numero.value = ""
    numero.focus() 
}

function finalizar(){
    if(vetorNum.length == 0){
        alert("Antes adicione um número!")
    }
    else{
        let tam = vetorNum.length
        let menor = vetorNum[0]
        let maior = vetorNum[0]
        let soma = 0
        let media = 0
        //laço de percurso para varrer o vetor inteiro
        for(let i in vetorNum){
            soma += vetorNum[i]

            if(vetorNum[i] > maior){
                maior = vetorNum[i]
            }if(vetorNum[i] < menor){
                menor = vetorNum[i]
            }
        }
        media = soma /(vetorNum.length)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>Media dos valores, temos ${media}. </p>`
        
    }
}


//criar um vetor de tamanho == 100(tentar fazer crescer dinamicamente), que seja limitado a receber numros de 1 a 100

/*
function adicionar(){
    let numero = document.getElementById('numTxt')
    let tab = document.getElementById('seltab')

    if( numero.value.length == 0){
        alert("Caixa de numeros vazios")
    }
    else{
        let num = Number(numero.value)

        if(num < 1 || num > 100){
            alert("Numero fora da faixa indicada")
        }
        else if(numVetor.indexOf() != -1){
            alert("valor já adicionado")
        }
        else{
            vetorNum.push(num)
            //alert(`Adicionado ${vetorNum.length}`)
            let item = document.createElement('option') //cria a sessão de html dinamicamente em JS
            item.text = `Valor ${num} adicionado`
            tab.appendChild(item) //cria um novo item  
        }
    }  
}


function finalizar(){
    let res = document.getElementById("res")

    if(vetorNum.length == 0){
        alert("Antes adicione um número!")
    }
    else{
        vetorNum.sort()
        let tam = Number(vetorNum.length)
        let fim = tam - 1
        let i = 0
        let soma = 0
        
        while(i != tam ){
            soma = soma + vetorNum[i] 
            i++
        }

        res.innerHTML = `Ao todo, temos ${tam} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${vetorNum[fim]}. <br>`
        res.innerHTML += `O menor valor informado foi ${vetorNum[0]}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
        
    }
}
*/