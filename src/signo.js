var dia_semana = new Array();
dia_semana[0] = "um domingo";
dia_semana[1] = "uma segunda-feira";
dia_semana[2] = "uma terça-feira";
dia_semana[3] = "uma quarta-feira";
dia_semana[4] = "uma quinta-feira";
dia_semana[5] = "uma sexta-feira";
dia_semana[6] = "uma sábado-feira";

var nome_mes = new Array();
nome_mes[0] = "Janeiro";
nome_mes[1] = "Fevereiro";
nome_mes[2] = "Março";
nome_mes[3] = "Abril";
nome_mes[4] = "Maio";
nome_mes[5] = "Junho";
nome_mes[6] = "Julho";
nome_mes[7] = "Agosto";
nome_mes[8] = "Setembro";
nome_mes[9] = "Outubro";
nome_mes[10] = "Novembro";
nome_mes[11] = "Dezembro";

function Exibir() {
    var d_ani = document.getElementById("TexDia").value;
    var m_ani = document.getElementById("TexMes").value;
    var a_ani = document.getElementById("TexAno").value;

    // verificação do dia 
    if (isNaN(d_ani)) {
        window.alert("Infelizmente o dia não pode ser caracter!  tente novamente ;)");
        location.reload();
    }
    else if (d_ani == "") {
        window.alert("Infelizmente o dia não  pode ficar sem nada , preencha com um dia;) ");
        location.reload();
    }
    else {
        d_ani = parseInt(d_ani);
        if ((d_ani < 1) || (d_ani > 31)) {
            window.alert("O dia deve ser entre 1 e 31, tente novamente");
            location.reload();
        }
    }

    //verificaçao do mes
    if (isNaN(m_ani)) {
        window.alert("Infelizmente o mês não pode ser caracter!  preencha com um mês ");
        location.reload();
    }
    else if (m_ani == "") {
        window.alert("Infelizmente o mês não pode ficar sem nada, preencha com um mês");
        location.reload();
    }
    else {
        if ((m_ani < 1) || (m_ani > 12)) {

            window.alert("Infelizmente o mês tem que ser entre 1 a 12, preencha novamente");
            location.reload();
        }
    }
    //verificando se o ano está correto
    if (isNaN(a_ani)) {
        window.alert("Infelizmente o ano não pode ser caracter! preencha com um ano ");
        location.reload();
    }
    else if (a_ani == "") {
        window.alert("Infelizmente o ano não pode ficar sem nada, preencha com um ano ");
        location.reload();
    }
    else if (a_ani.length != 4) {
        window.alert("Infelizmente o ano tem que ser com 4 caracter, preencha com um ano ");
        location.reload();

    }
    else {
        d_ani = parseInt(d_ani);
        m_ani = parseInt(m_ani);
        a_ani = parseInt(a_ani);


        var hoje = new Date();

        var d_hoj = hoje.getDate();
        var m_hoj = hoje.getMonth();
        var a_hoj = hoje.getFullYear();

        // vamos calcular a idade da pessoa 

        var idade = a_hoj - a_ani;//idade tem o resultado

        if (m_ani > m_hoj) idade = idade - 1;

        else if ((m_ani == m_hoj) && (d_ani > d_hoj)) idade = idade - 1;

        document.getElementById("TexIdade").value = idade;

        hoje.setDate(d_ani);
        hoje.setMonth(m_ani - 1);
        hoje.setFullYear(a_ani);

        document.getElementById("TexSemana").value = dia_semana[hoje.getDay()];
        document.getElementById("TexMesExibir").value = nome_mes[m_ani - 1];

        if (((d_ani >= 20) && (m_ani == 1) || (d_ani <= 18) && (m_ani == 2))) {
            document.getElementById("signo").src = "src/imagen/imgAquario.jpg";
        }
        else if (((d_ani >= 19) && (m_ani == 2) || (d_ani <= 20) && (m_ani == 3))) {
            document.getElementById("signo").src = "src/imagen/imgPeixe.jpg";
        }
        else if (((d_ani >= 21) && (m_ani == 3) || (d_ani <= 19) && (m_ani == 4))) {
            document.getElementById("signo").src = "src/imagen/imgAries.jpg";
        }
        else if (((d_ani >= 20) && (m_ani == 4) || (d_ani <= 20) && (m_ani == 5))) {
            document.getElementById("signo").src = "src/imagen/imgTouro.jpg";
        }
        else if (((d_ani >= 21) && (m_ani == 5) || (d_ani <= 20) && (m_ani == 6))) {
            //gemeos
            document.getElementById("signo").src = "src/imagen/imgGemini .jpg";
        }
        else if (((d_ani >= 21) && (m_ani == 6) || (d_ani <= 22) && (m_ani == 7))) {
            //cancer
            document.getElementById("signo").src = "src/imagen/imgCancer.jpg";
        }
        else if (((d_ani >= 23) && (m_ani == 7) || (d_ani <= 22) && (m_ani == 8))) {
            //leao
            document.getElementById("signo").src = "src/imagen/imgLeão.jpg";
        }
        else if (((d_ani >= 23) && (m_ani == 8) || (d_ani <= 22) && (m_ani == 9))) {
            //virgem
            document.getElementById("signo").src = "src/imagen/imgVirgem.jpg";
        } else if (((d_ani >= 23) && (m_ani == 9) || (d_ani <= 22) && (m_ani == 10))) {
            //libra   
            document.getElementById("signo").src = "src/imagen/imgLibra.jpg";
        } else if (((d_ani >= 23) && (m_ani == 10) || (d_ani <= 21) && (m_ani == 11))) {
            //escorpiao
            document.getElementById("signo").src = "src/imagen/imgScorpiao.jpg";
        } else if (((d_ani >= 22) && (m_ani == 11) || (d_ani <= 21) && (m_ani == 12))) {
            //sargitario
            document.getElementById("signo").src = "src/imagen/imgSargitario.jpg";
        } else {
            //capricornio
            document.getElementById("signo").src = "src/imagen/imgCapricornio.jpg";
        }
    }
}

function Limpar()
{
    
    document.getElementById("TexDia").value="";
    document.getElementById("TexMes").value="";
    document.getElementById("TexAno").value="";
    document.getElementById("TexIdade").value="";
    document.getElementById("TexMesExibir").value="";
    document.getElementById("TexSemana").value="";
    document.getElementById("signo").src = "src/imagen/imgInicial.jpg";

}





