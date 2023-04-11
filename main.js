const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "03 nov 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor( segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const FinalMinutos = Math.floor(segTotal / 60) % 60;
    const FinalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = FinalMinutos
    segundo.innerHTML = FinalSegundos

    dia.innerHTML = (finalDias) + 'D';
    hora.innerHTML = (finalHoras) + 'H';
    minuto.innerHTML = (FinalMinutos) + 'M';
    segundo.innerHTML = (FinalSegundos) + 'S';
}

countDown();
setInterval(countDown, 1000)

