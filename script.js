function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1924){
        window.alert('Verifique o ano digitado e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if  (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto/novoh.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto/jovemh.png')
            }else if(idade < 55) {
                //adulto
                img.setAttribute('src', 'foto/adultoh.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto/velhoh.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto/novom.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto/jovemm.png')
            }else if(idade < 55) {
                //adulto
                img.setAttribute('src', 'foto/adultom.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto/velhom.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}