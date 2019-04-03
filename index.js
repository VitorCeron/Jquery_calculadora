$(document).ready(function(){

    //validar formulario
    $('#formCalcular').on("submit", function(e) {
        $(this)
            .find("input, select, textarea")
            .filter(function() { return this.value == ''; })
            .each(function() {
                e.preventDefault();
                $(this).addClass('is-invalid')
            });

        var numero1 = parseFloat($('#numero1').val());
        var numero2 = parseFloat($('#numero2').val());
        var operacao = $('input:radio[name=operacao]:checked').val();
        
        var resultado = 0;
        if( operacao === 'adicao' ){
            resultado = numero1 + numero2;
        } else if( operacao === 'subtracao' ){
            resultado = numero1 - numero2;
        } else if( operacao === 'multiplicacao' ){
            resultado = numero1 * numero2;
        } else if( operacao === 'divisao' ){
            if( numero2 == 0 ){
                alert('Não existe divisão por zero, selecionar outro número.');
                return false;
            } else {
                resultado = numero1 / numero2;
            }
            
        } else {
            alert('Operacao não localizada.');
        }

        $('#resultado').val(resultado);
        e.preventDefault();
    });

    $('#btnLimpar').click(function(){
        $('#resultado').val(0);
    });

});