import { Supplier } from "../types"
import uuid from "react-native-uuid";

export const suppliers: Supplier[] = [
  {
    id: String(uuid.v4()),
    nome: "Fornecedor Eletrônicos",
    cidade: "São Paulo",
    endereco: "Av. Paulista, 1000",
    categoria_produto: "Eletrônicos",
    logoUrl: "https://rdrsolucoeslogisticas.com.br/wp-content/uploads/2022/08/transporte-de-produtos-eletronicos.png"
  },
  {
    id: String(uuid.v4()),
    nome: "B&B Games",
    cidade: "Porto Alegre",
    endereco: "Av. Borges de Medeiros, 1000",
    categoria_produto: "Eletrônicos",
    logoUrl: "https://i0.wp.com/bebgames.com.br/wp-content/uploads/2022/07/FAVICON.png?w=849&ssl=1"
  },
  {
    id: String(uuid.v4()),
    nome: "Men's Clothing",
    cidade: "Rio de Janeiro",
    endereco: "Rua das Laranjeiras, 300",
    categoria_produto: "Roupas",
    logoUrl: "https://img.freepik.com/vetores-premium/logotipo-da-loja-de-roupas-masculinas-da-loja-de-roupas-em-fundo-transparente-vetor-do-logotipo-da-loja-de-roupas_148524-757.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Fornecedor Roupas",
    cidade: "Rio de Janeiro",
    endereco: "Rua das Laranjeiras, 300",
    categoria_produto: "Roupas",
    logoUrl: "https://www.querorevenderprodutos.com.br/wp-content/uploads/2021/08/Fornecedores-de-roupas-para-revenda-direto-de-fabrica.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Food Share",
    cidade: "Belo Horizonte",
    endereco: "Av. Afonso Pena, 1200",
    categoria_produto: "Alimentos",
    logoUrl: "https://static.vecteezy.com/ti/vetor-gratis/p3/10071721-fresh-food-logo-food-share-logo-design-template-vetor.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Ambev",
    cidade: "Curitiba",
    endereco: "Rua XV de Novembro, 800",
    categoria_produto: "Bebidas",
    logoUrl: "https://logodownload.org/wp-content/uploads/2020/01/ambev-logo.png"
  },
  {
    id: String(uuid.v4()),
    nome: "DC Solutions",
    cidade: "Porto Alegre",
    endereco: "Av. Borges de Medeiros, 500",
    categoria_produto: "Material de Construção",
    logoUrl: "https://i.pinimg.com/236x/4c/96/47/4c9647af8f197a10781178a30973ba20.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Auto Deal",
    cidade: "Salvador",
    endereco: "Av. Sete de Setembro, 400",
    categoria_produto: "Automóveis",
    logoUrl: "https://img.freepik.com/vetores-premium/auto-deal-logo-para-concessionaria-de-carros-isolado-na-cor-preta_554888-2344.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Furniture",
    cidade: "Recife",
    endereco: "Rua Boa Vista, 1500",
    categoria_produto: "Móveis",
    logoUrl: "https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-moveis_23-2148628129.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Sport Equipment",
    cidade: "Fortaleza",
    endereco: "Av. Beira Mar, 200",
    categoria_produto: "Artigos Esportivos",
    logoUrl: "https://thumbs.dreamstime.com/z/sport-equipment-set-collection-various-object-sport-equipment-set-collection-various-object-exercise-tennis-racket-155128910.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Brinquedos da Mimiu",
    cidade: "Florianópolis",
    endereco: "Rua das Flores, 700",
    categoria_produto: "Brinquedos",
    logoUrl: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize/2015/03/31/16/WDL-Logo-51683_22456_072316335_644236168.jpg"
  },
  {
    id: String(uuid.v4()),
    nome: "Perfumes",
    cidade: "Manaus",
    endereco: "Av. Eduardo Ribeiro, 900",
    categoria_produto: "Perfumaria",
    logoUrl: "https://img.freepik.com/vetores-premium/logotipo-de-perfume-luxuoso_23-2148453548.jpg"
  }
]


