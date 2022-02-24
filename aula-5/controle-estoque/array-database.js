const produtos = []

const vendas = []

// Funções Produtos
const cadastrarProdutos = function(produto) {
    if(!produto.nome) {
        return console.log('Produto sem nome')
    }

    if(produto.quantidade < 0) {
        return console.log('Produto sem quantidade')
    }

    if(produto.valorEntrada <= 0) {
        return console.log('Produto sem preço de custo')
    }

    if(produto.margemLucro  <= 0) {
        return console.log('Produto sem margem de lucro')
    }

    produtos.push(produto)

    return produto
}

const buscarProdutos = function () {
    return JSON.parse(JSON.stringify((produtos)))
}

const buscarProdutoPorId = function (idProduto) {
    let produto = {}

    produtos.forEach((elemento) => {
        if(elemento.id === idProduto) {
            produto = elemento
        }
    })

    return produto
}

const buscaGenerica = function (chave, valor) {
    let arrayProdutos = []

    produtos.forEach((elemento) => {
        if(elemento[chave].toUpperCase() === valor.toUpperCase()) {
            arrayProdutos.push(elemento)
        }
    })

    return arrayProdutos
}

const atualizarProduto = function(id, chave, valor) {
    if(chave === 'id') {
        return console.log('Não é possível alterar o ID')
    }
    produtos.forEach((elemento) => {
        if(elemento.id === id) {
            elemento[chave] = valor
        }
    })
}

const deletarProdutoById = function(id) {
    produtos.forEach((elemento, i) => {
        if(elemento.id === id) {
            produtos.splice(i, 1)
            console.log(produtos)
        }
    })
}

// Funções Vendas

const cadastrarVenda = function(venda) {
    if(!venda.idProduto) {
        return console.log('Id do produto não informado')
    }

    if(!venda.quantidade) {
        return console.log('Quantidade não informada')
    }

    const produto = buscarProdutoPorId(venda.idProduto)
    
    if(produto.quantidade <= 0) {
        return console.log('Produto indisponível')
    }
    
    if(produto.quantidade < venda.quantidade) {
        return console.log(`Quantidade indisponível\nQuandidade disponível: ${produto.quantidade}`)
    }
    
    venda['preco'] = Number((produto.valorEntrada * produto.margemLucro).toFixed(2))
    
    atualizarProduto(venda.idProduto, 'quantidade', produto.quantidade - venda.quantidade)
    const produtoAtualizado = buscarProdutoPorId(venda.idProduto)
    
    vendas.push(venda)
    return {
        id: venda.id,
        produto: produtoAtualizado 
    }
}

const buscarVendas = function() {
    return JSON.parse(JSON.stringify(vendas))
}

const buscarVendaPorId = function (idVenda) {
    let venda = {}

    vendas.forEach((elemento) => {
        if(elemento.id === idVenda) {
            venda = elemento
        }
    })

    return venda
}

const buscarVendaPorVendedor = function (vendedor) {
    let vendasDoVendedor = []

    vendas.forEach((elemento) => {
        if(elemento.vendendor === vendedor) {
            vendasDoVendedor.push(elemento) 
        }
    })

    return vendasDoVendedor
}

const buscarQuantidadeDeProdutos = function() {
    return produtos.reduce((produtoAnterior, current, i, arr) =>  {
        if(typeof produtoAnterior === 'object') {
            return produtoAnterior.quantidade + current.quantidade
        }
        return produtoAnterior + current.quantidade
    }
   )
}

module.exports = {
    cadastrarProdutos,
    buscarProdutos,
    buscarProdutoPorId,
    buscaGenerica,
    atualizarProduto,
    deletarProdutoById,
    cadastrarVenda,
    buscarVendas,
    buscarVendaPorId,
    buscarVendaPorVendedor,
    buscarQuantidadeDeProdutos
}