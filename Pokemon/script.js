$(document).ready(function(){
    $('#btn').on('click',()=>{
        var pesq = $("#pesquisa").val();

        var link ='https://pokeapi.co/api/v2/pokemon/' + pesq;
        $.ajax({
            url: link,
            method: 'GET',
            dataType: 'json',
            success: function(dados){
                var inforPokemon = `<img src="${dados.sprites.other["official-artwork"].front_default}"
                alt="Img_Pokemon" id="img_Pokemon"/>
                <span>${dados.name}</span>
                 <div class="informacao">
                    <span>${dados.types[0].type.name}</span>

                    <span>${dados.height}</span>
                    <span>${dados.weight}</span>

                    <span>${dados.stats[0].stat.name}</span>
                    <span>${dados.stats[0].base_stat}</span>

                    <span>${dados.stats[1].stat.name}</span>
                    <span>${dados.stats[1].base_stat}</span>

                    <span>${dados.stats[2].stat.name}</span>
                    <span>${dados.stats[2].base_stat}</span>

                    <span>${dados.stats[3].stat.name}</span>
                    <span>${dados.stats[3].base_stat}</span>

                    <span>${dados.stats[4].stat.name}</span>
                    <span>${dados.stats[4].base_stat}</span>

                    <span>${dados.stats[5].stat.name}</span>
                    <span>${dados.stats[5].base_stat}</span>
                 </div>`

                console.log(dados);

                $("#bloco").append(inforPokemon);
            }
        })
    })
})