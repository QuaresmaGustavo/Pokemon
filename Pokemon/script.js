$(document).ready(function () {
    $('#btn').on('click', () => {
        var pesq = $("#pesquisa").val();
        $('#error').remove();

        var link = 'https://pokeapi.co/api/v2/pokemon/' + pesq;
        $.ajax({
            url: link,
            method: 'GET',
            dataType: 'json',
            success: function (dados) {
                var idbloco = dados.name;

                if ('#' + idbloco) {
                    $('#' + idbloco).remove();
                }

                var close = dados.name + "close";
                var inforPokemon = `
                <div id="${idbloco}">
                    <div id="cabecalho">
                    <span id="nomePokemon">${dados.name}</span>
                    <button type="button" id="${close}"><span class="material-symbols-outlined">close</span></button>
                    </div>
                    <img src="${dados.sprites.other["official-artwork"].front_default}" alt="Img_Pokemon" id="img_Pokemon"/>
                
                    <div class="informacao">
                        <h3>Detalhes</h3>
                        <div id="detalhesPokemon">
                            <p id="typePokemon"><span id="tipo">Tipo - ${dados.types[0].type.name}</span></p>
                            <p id="heightPokemon"><span id="altura">Altura - ${dados.height}</span></p>
                            <p id="WeightPokemon"><span id="peso">Peso - ${dados.weight}</span></p>
                        </div>

                        <h3>Status</h3>
                        <div id="statusPokemon">
                            <p class="status">
                                <span>${dados.stats[0].stat.name} - <span>${dados.stats[0].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[1].stat.name} - <span>${dados.stats[1].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[2].stat.name} - <span>${dados.stats[2].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[3].stat.name} - <span>${dados.stats[3].base_stat}</span></span>
                            </p>

                            <p class="status">
                                <span>${dados.stats[4].stat.name} - <span>${dados.stats[4].base_stat}</span></span> 
                            </p>

                            <p class="status">
                                <span>${dados.stats[5].stat.name} - <span>${dados.stats[5].base_stat}</span></span>
                            </p>
                        </div>
                    </div>
                </div>`

                $('#body').append(inforPokemon);

                $('#' + close).on('click', () => {
                    $('#' + idbloco).remove();
                })

                $('#' + idbloco).addClass("bloco");
                $('#' + close).addClass("close");
            },

            error: function pesqErro() {

                let intervalo = setInterval(() => {
                    var error = `<span id="error">nome pesquisado invalido!!!</span>`;

                    $('.search').append(error);

                    clearInterval(intervalo);
                }, 1000);
            }
        })
    })
})