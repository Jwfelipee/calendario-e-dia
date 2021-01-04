function carregar() {
   { var msg = window.document.getElementById("msg")
    var img= document.getElementById("imagem")
    var img2 = document.getElementById("calen")
    var data = new Date()
    var hora = data.getHours()
    var data2 = new Date()
    var min = data2.getMinutes()
    var data3 = new Date()
    var sec = data3.getSeconds()
    var data4 = new Date()
    var dia = data4.getDate()
    var data5 = new Date()
    var mes = data5.getMonth()
    var data6 = new Date()
    var ano = data6.getFullYear()
}

        switch (mes) {
            case 0:
                mes = "Janeiro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario1.png"
                break
            case 1:
                mes = "fevereiro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario2.png"
                break
            case 2:
                mes = "março"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario3.png"
                break
            case 3:
                mes = "abril"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario4.png"
                break
            case 4:
                mes = "maio"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario5.png"
                break
            case 5:
                mes = "junho"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario6.png"
                break
            case 6:
                mes = "julho"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario7.png"
                break
            case 7:
                mes = "agosto"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario8.png"
                break
            case 8:
                mes = "setembro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario9.png"
                break
            case 9:
                mes = "outubro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario10.png"
                break
            case 10:
                mes = "novembro"
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario11.png"
                break
            case 11:
                mes = "dezembro" 
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "imagens/calendario.png"
                break
            default:
                alert("[ERRO 000] Ação invalida, verefique e tente novamente!")
        }
    

            /*if (mes = "dezembro") {       (outra maneira de fazer seria com IF, ELSE IF e ELSE)
                msg2.innerHTML = `Do dia ${dia} do mês de ${mes} do ano de ${ano}`
                calen.src = "noite.png"
            }*/

{        if (hora <= 5 || hora >= 19) {
            //esta escuro
            img.src = "imagens/noite.png"
            document.body.style.background = "#051834"
    }   else if (hora >= 6 && hora < 9) {
            //bom dia
            img.src = "imagens/manha.png"
            document.body.style.background = "#c0a2da"
    }   else if (hora >= 9 && hora < 12) {
            //a manha esta acabando
            img.src = "imagens/finalmanha.png"
            document.body.style.background = "#faf3ae"
    }   else if (hora >= 12 && hora <= 16) {
            //boa tarde
            img.src = "imagens/tarde.png"
            document.body.style.background = "#fda791"
    }   else {
            //esta escurecendo
            img.src = "imagens/finaltarde.png"
            document.body.style.background = "#cc5861"

    }
}
}