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
        
    }
}







