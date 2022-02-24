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
 *      vendedor
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
 *      Quantidade >= 0
 * 
 * Funcionalidades:
 *      cadastrarProdutos - OK
 *      buscarProdutos - OK
 *      buscarProduto - OK
 *      atualizarFornecedor - OK
 *      atualizarPreçoEntrada - OK
 *      atualizarMargem - OK
 *      remover - OK
 *      casdastrarVendas - OK
 * 
 *      
 *      
 */
const nossoDb = require('./array-database')

// console.log(nossoDb.buscarProdutoPorId(4))
// console.log(nossoDb.buscarProdutos(4))
// console.log(nossoDb.buscaGenerica('nome', 'arros'))

// const _produtos = nossoDb.buscarProdutos()

// nossoDb.cadastrarProdutos({
//     id: 5,
//     nome: 'Bata Frita',
//     quantidade: 10,
//     valorEntrada: 2.50,
//     margemLucro: 40,
//     unidadeMedida: 'un',
//     categoria: 'lanche',
//     frente: 'lanche',
//     fornecedor: 'Elma Chips'
// })

// console.log(nossoDb.buscarProdutoPorId(1))
// nossoDb.atualizarProduto(1, 'fornecedor', 'Tia Ju')
// console.log(nossoDb.buscarProdutoPorId(1))
// nossoDb.atualizarProduto(1, 'valorEntrada', 20)
// console.log(nossoDb.buscarProdutoPorId(1))
// nossoDb.atualizarProduto(1, 'id', 20)
// console.log(nossoDb.buscarProdutoPorId(1))

// console.log(nossoDb.buscarProdutos())
// nossoDb.deletarProdutoById(3)
// console.log(nossoDb.buscarProdutoPorId(1))

// console.log(nossoDb.buscarProdutoPorId(1))
//  console.log((nossoDb.cadastrarVenda({
//     id: 12,
//     idProduto: 1,
//     vendendor: 'Aguilar',
//     quantidade: 10,
//     entrega: true,
// })))

// // console.log(nossoDb.buscarProdutoPorId(1))
//  console.log((nossoDb.cadastrarVenda({
//     id: 13,
//     idProduto: 2,
//     vendendor: 'Giu',
//     quantidade: 2,
//     entrega: true,
// })))

// console.log((nossoDb.cadastrarVenda({
//     id: 14,
//     idProduto: 4,
//     vendendor: 'Giu',
//     quantidade: 3,
//     entrega: true,
// })))

// // console.log(nossoDb.buscarVendas())
// console.log('---------------------------')
// console.log(nossoDb.buscarVendaPorId(12))
// console.log('------------Vendas Giu---------------')
// console.log(nossoDb.buscarVendaPorVendedor('Giu'))


//Execução do programa
const produtosIniciais = nossoDb.buscarProdutos().length
const vendasIniciais = nossoDb.buscarVendas().length

nossoDb.cadastrarProdutos({
    id: 1,
    nome: 'Arroz',
    quantidade: 10,
    valorEntrada: 7.50,
    margemLucro: 1.4,
    unidadeMedida: 'un',
    categoria: 'cereais',
    frente: 'cereais',
    fornecedor: 'Camil'
})
nossoDb.cadastrarProdutos({
    id: 2,
    nome: 'Frango',
    quantidade: 10,
    valorEntrada: 16.50,
    margemLucro: 1.4,
    unidadeMedida: 'un',
    categoria: 'Carnes',
    frente: 'Frios',
    fornecedor: 'Sadia'
})
nossoDb.cadastrarProdutos({
    id: 3,
    nome: 'Suco de uva',
    quantidade: 20,
    valorEntrada: 3.50,
    margemLucro: 1.4,
    unidadeMedida: 'un',
    categoria: 'Bebidas',
    frente: 'Bebidas',
    fornecedor: 'Dell Vale'
})
nossoDb.cadastrarProdutos({
    id: 3,
    nome: 'Batata Palha',
    quantidade: 27,
    valorEntrada: 2.50,
    margemLucro: 1.5,
    unidadeMedida: 'un',
    categoria: 'Condimentos',
    frente: 'Condimentos',
    fornecedor: 'Viscontti'
})

const produtosCadastrados = nossoDb.buscarProdutos()


// nossoDb.cadastrarVenda({
//         id: 10,
//         idProduto: 1,
//         vendendor: 'Aguilar',
//         quantidade: 4,
//         entrega: true,
//     })

// nossoDb.cadastrarVenda({
//     id: 11,
//     idProduto: 3,
//     vendendor: 'Aguilar',
//     quantidade: 6,
//     entrega: true,
// })

// nossoDb.cadastrarVenda({
//     id: 12,
//     idProduto: 2,
//     vendendor: 'Flavius',
//     quantidade: 8,
//     entrega: true,
// })

const vendasRealizadas = nossoDb.buscarVendas()
const produtosPosVendas = nossoDb.buscarProdutos()
// console.log(JSON.stringify({
//     ProdutosIniciais: produtosIniciais,
//     VendasIniciais: vendasIniciais,
//     ProdutosPosteriormenteCadastrados: produtosCadastrados,
//     QuantidadePosteriormenteCadastrados: produtosCadastrados.length,
//     VendasRealizadas: vendasRealizadas,
//     QuantidadeDeVendasRealizadas: vendasRealizadas.length,
//     ProdutosPosVendas: produtosPosVendas
// }))


console.log(nossoDb.buscarQuantidadeDeProdutos())
