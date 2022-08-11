class Restaurante {
    constructor(nome, endereco, experiencia, especialidade, dias, horario) {
        this.nome = nome;
        this.endereco = endereco;
        this.experiencia = experiencia;
        this.especialidade = especialidade;
        this.dias = dias;
        this.horario = horario;
    }

    resumo() {
        return `${this.nome} é um restaurante ${this.especialidade} que esta atendendo a ${this.experiencia}. Nesses ${this.experiencia}, sua especialidade sempre foi ${this.especialidade}. Seu foco é comida rápida a um preço acessível. Possui várias franquias, pela cidade de São Paulo, e a filial fica no ${this.endereco}, trabalhando ${this.dias}, ${this.horario}. E, como todo fast food, é possível fazer seu pedido e pagar sua conta de forma muito rápida. Se, ao final da compra, o cliente quiser fazer uma crítica, ele pode.`
    }

    fazerPedido() {

    }

    pagarConta() {

    }

    darFeedback() {

    }

}

const id01 = new Restaurante("Burguer Queen", "Centro de São Paulo", "Vinte Anos", "Hamburgueres", "todos os dias da semana", "das 09:00 às 21:00")

class Veiculo {

    //@Params
    //modelo - string
    //ano - integer
    //fabricante - string
    //tipoCombustivel - array
    //condicao - string

    constructor(modelo, ano, fabricante, tipoCombustivel, condicao) {
        this.modelo = modelo;
        this.ano = ano;
        this.fabricante = fabricante;
        this.tipoCombustivel = tipoCombustivel;
        this.condicao = condicao;
    }

    abastecer(valor, combustivel) {
        if (this.tipoCombustivel.indexOf(combustivel) != -1) {
            return `Abastecendo o seu ${this.fabricante} ${this.modelo} ${this.ano} com R$${valor.toFixed(2)} reais de ${combustivel}`
        } else {
            return `Este combustivel não é compatível com seu veículo.`
        }
    }

    abastecer() {

    }

    calibrarPneus() {

    }

    ouvirMusicas() {

    }

    consertar() {

    }

}