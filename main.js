document.addEventListener('DOMContentLoaded', function(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let instrumentos = '';
            data.instrumentos.forEach(instrumento => {
                instrumentos += `
                    <div class="instrumentos__content">
                        <img class="instrumentos__imagem" src="${instrumento.imagem}" alt="${instrumento.nome}">
                        <div class="instrumentos__infos">
                            <h2 class="instrumentos__nome">${instrumento.nome}</h2>
                            <p class="instrumentos__pagamento">${instrumento.pagamento}</p>
                            <p class="instrumentos__preco">${instrumento.preco}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('instrumentos').innerHTML = instrumentos;
        })
        .catch(error => console.error('Erro ao buscar as pizzas:', error));
});