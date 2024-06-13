let confere = [' _ '], letrasCorretas = [], letErrada = [], result = "", numImg = 1


function habilitarBtInicio(){
    const palav = document.querySelector("#segredo").value
    if (palav.length >= 6) {
        document.getElementById("btInicia").disabled = false
    }
}

function iniciarJogo(){
    document.getElementById("tentativa").disabled = false
    document.getElementById("btVerifica").disabled = false
    document.getElementById("segredo").disabled = true
    document.getElementById("btInicia").disabled = true 
    document.getElementById("tentativa").focus()
}

function verificaLetra(){
    const palavra = document.querySelector("#segredo").value.toLowerCase()
    const letra = document.querySelector("#tentativa").value.toLowerCase()
    document.getElementById("painel").innerHTML = ""
    confere.length = palavra.length
    for(let i = 0; i < palavra.length; i++){
        const l = palavra.charAt(i)
        if(l === letra){
            if(!letrasCorretas.includes(l)){
                letrasCorretas.push(l)
            }
        
            for(let j = 0; j < letrasCorretas.length; j++){
                if(palavra.charAt(i) === letrasCorretas[j]){
                    confere[i] = letrasCorretas[j]
                }
            }
            result = ""

            for(let x = 0; x < confere.length; x++){
                if(confere[x] == null){
                    confere[x] = ' _ '
                }
                result += confere[x]
            }
        }
    }
    if(!confere.includes(letra)){
        letErrada.push(letra)
        numImg++
        let nomeImg = "imagens/" + numImg + ".png"
        let img = document.querySelector("#image")
        img.setAttribute('src', nomeImg)
        if(numImg >= 7){
            document.getElementById("reset").removeAttribute("hidden")
            result = "palavra: " + palavra
            document.getElementById("tentativa").disabled = true
            document.getElementById("btVerifica").disabled = true
            document.getElementById("tituloPag").innerHTML = "Você Perdeu!!"
            document.getElementById("tituloPag").style.color = "red"
        }
    }

    if(!confere.includes(' _ ')){
        document.getElementById("tentativa").disabled = true
        document.getElementById("btVerifica").disabled = true
        document.getElementById("tituloPag").innerHTML = `Parabéns, você acertou a palavra!!`
        document.getElementById("tituloPag").style.color = "green"
        document.getElementById("reset").removeAttribute("hidden")
    }
    document.getElementById("painel").innerHTML = result
    document.getElementById("tentativa").value = ""
    document.getElementById("erradas").innerHTML = letErrada
    document.getElementById("tentativa").focus()
}

function reiniciaJogo(){
    location.reload()
    document.getElementById("segredo").focus()
}