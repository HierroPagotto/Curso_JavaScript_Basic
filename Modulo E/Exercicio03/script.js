
function contar(){
    var int = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var red = document.getElementById('res')

    if (int.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO] Faltam dados.')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(int.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f){
        for(var c = 1; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }else{
        for(var c = i; c >= f; c -= p){
            res.innerHTML +=`${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
        }
    }
}