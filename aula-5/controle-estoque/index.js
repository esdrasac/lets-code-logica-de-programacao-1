/**
 * Controle de Estoque Supermercado
 * 
 * Dados:
 *  produtos: 
 *      id
 *      nome
 *      quantidade
 *      valorEntrada
 *      margemLucro
 *      unidadeMedida
 *      categoria
 *      frente
 *      fornecedor
 * 
 *  vendas:
 *      id
 *      idProduto
 *      quantidade
 *      preco
 *      data    
 *      
 * 
 * Campos obrigatórios:
 *      nome
 *      quantidade
 *      valorEntrada
 *      margemLucro
 * 
 * Regras de negócio:
 *      Valores, margem, devem ser positivos 
 *      Quantidade += 0
 * 
 * Funcionalidades:
 *      cadastrarProdutos - OK
 *      buscarProdutos - OK
 *      buscarProduto - OK
 *      atualizarFornecedor - OK
 *      atualizarPreçoEntrada - OK
 *      atualizarMargem - OK
 *      casdastrarVendas
 *      remover 
 *      
 *      
 */
const produtosDb = require('./array-database-produto')

// console.log(produtosDb.buscarProdutoPorId(4))
// console.log(produtosDb.buscarProdutos(4))
// console.log(produtosDb.buscaGenerica('nome', 'arros'))

const _produtos = produtosDb.buscarProdutos()

produtosDb.cadastrarProdutos({
    id: 5,
    nome: 'Bata Frita',
    quantidade: 10,
    valorEntrada: 2.50,
    margemLucro: 40,
    unidadeMedida: 'un',
    categoria: 'lanche',
    frente: 'lanche',
    fornecedor: 'Elma Chips'
})

// console.log(produtosDb.buscarProdutoPorId(1))
// produtosDb.atualizarProduto(1, 'fornecedor', 'Tia Ju')
// console.log(produtosDb.buscarProdutoPorId(1))
// produtosDb.atualizarProduto(1, 'valorEntrada', 20)
// console.log(produtosDb.buscarProdutoPorId(1))
// produtosDb.atualizarProduto(1, 'id', 20)
// console.log(produtosDb.buscarProdutoPorId(1))

console.log(produtosDb.buscarProdutos())
produtosDb.deletarProdutoById(3)
// console.log(produtosDb.buscarProdutoPorId(1))
