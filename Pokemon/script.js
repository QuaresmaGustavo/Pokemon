$(document).ready(function () {
    $('#btn').on('click', () => {
        var pesq = $("#pesquisa").val();

        var link = 'https://pokeapi.co/api/v2/pokemon/' + pesq;
        $.ajax({
            url: link,
            method: 'GET',
            dataType: 'json',
            success: function (dados) {
                var inforPokemon = `
                <div id="bloco">
                    <span id="nomePokemon">${dados.name}</span>
                    <img src="${dados.sprites.other["official-artwork"].front_default}" alt="Img_Pokemon" id="img_Pokemon"/>
                
                    <div class="informacao">
                        <p id="typePokemon"><span id="tipo">Tipo: ${dados.types[0].type.name}</span></p>
                        <p id="heightPokemon"><span id="altura">Altura: ${dados.height}</span></p>
                        <p id="WeightPokemon"><span id="largura">Largura: ${dados.weight}</span></p>

                        <div id="statusPokemon">
                            <p class="status">
                                <span>${dados.stats[0].stat.name}: <span>${dados.stats[0].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[1].stat.name}: <span>${dados.stats[1].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[2].stat.name}: <span>${dados.stats[2].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[3].stat.name}: <span>${dados.stats[3].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[4].stat.name}: <span>${dados.stats[4].base_stat}</span></span> 
                            </p>

                            <p class="status">
                                <span>${dados.stats[5].stat.name}: <span>${dados.stats[5].base_stat}</span></span>
                            </p>
                        </div>
                    </div>
                </div>`

                console.log(dados);

                $("#body").append(inforPokemon);
            }
        })
    })
})