class CaixaRegistradora{
    constructor(){
        this.estoque = [];
        this.caixa = [];
        this.nome = "";
    }

    iniciarAtendimento(nome){
        this.nome = nome;
        return `Olá ${nome}, seja bem vindo!`
    }

    adicionarProduto(codigoBarra,preco,nome){
        const produto = {
            codigoBarra: codigoBarra,
            preco: preco,
            nome: nome,
            quantidade: 0
        };
        this.estoque.push(produto);
    }
    adicionarItem(codigoBarra, quantidade){
        const produto = this.estoque.find(item => item.codigoBarra === codigoBarra);
        if(produto){
            produto.quantidade+=quantidade;
            this.caixa.push(produto);
        }else{
            console.log('Produto não encontrado no estoque!')
        }
    }
    calcularValorTotal(){
        let total = 0;
        for (const produto of this.caixa){
            total += produto.preco * produto.quantidade;
        }
        return total;
    }
    listarProdutosComprados(){
        const produtosComprados = this.caixa.map(produto => produto.nome)
        return produtosComprados
    }
    fecharConta(dinheiro){
        const total = this.calcularValorTotal();
        const troco = dinheiro - total;
        if (troco >= 0) {
            console.log(`Cliente: ${this.cliente}`);
            console.log('Produtos comprados: ', this.listarProdutosComprados());
            console.log(`Total: R$ ${dinheiro.toFixed(2)}`);
            console.log(`Troco: R$${troco.toFixed(2)}`);
            this.caixa = [];
        }else{
            console.log("Dinheiro insuficiente para pagar a conta.")
        }
    }
}

const caixa = new CaixaRegistradora();
caixa.adicionarProduto(1, 4.59, 'Bolo de chcolate');
caixa.adicionarProduto(2, 14.59, 'Pão integral');
caixa.adicionarProduto(3, 3.99, 'Quindi');
caixa.adicionarProduto(4, 1.99, 'Pão de queijo');
caixa.adicionarProduto(5, 4.59, 'Biscoito de polvilho');
caixa.iniciarAtendimento('Delson');
caixa.adicionarItem(1,2);
caixa.adicionarItem(2,1);
caixa.adicionarItem(3,3);
caixa.adicionarItem(4,20);
caixa.adicionarItem(5,10);

caixa.fecharConta(1000);