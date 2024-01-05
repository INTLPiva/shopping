import React, { useEffect, useContext } from "react";

import ProductCard from "../ProductCard/ProductCard";
import { ProductsSection } from "./styles";
import Loading from "../../Loading/Loading";
import AppContext from "../../../context/AppContext";

const verbs = [
  "Armário",
  "Navio",
  "Mala",
  "Base",
  "Hidroavião",
  "Revista",
  "Carretel",
  "Minissaia",
  "Tamborim",
  "Andador",
  "Geladeira",
  "Estátua",
  "Rolo",
  "Crachá",
  "Peneira",
  "Bafômetro",
  "Desentupidor",
  "Guarda-chuva",
  "Espanador",
  "Escudo",
  "Raquete",
  "Vaso sanitário",
  "Lancheira",
  "Cofre",
  "Helióstato",
  "Medalha",
  "Foguete",
  "Lata",
  "Sintetizador",
  "Grampo",
  "Bucha",
  "Catraca",
  "Alfinete",
  "Caneca",
  "Fita",
  "Moeda",
  "Gel",
  "Maquete",
  "Interfone",
  "Gaveta",
  "Helicóptero",
  "Vela de cera",
  "Quimono",
  "Bambolê",
  "Necessaire",
  "Machado",
  "Tecido",
  "Vareta de freio",
  "Obra de arte",
  "Canga",
];

const adjectives = [
  "prepotente",
  "valioso",
  "legítimo",
  "desleixado",
  "Natural",
  "inteligente",
  "disciplinado",
  "louvável",
  "amargurado",
  "honesto",
  "odioso",
  "vergonhoso",
  "horroroso",
  "magnífico",
  "gordo",
  "romântico",
  "sublime",
  "mesquinho",
  "injusto",
  "medroso",
  "otário",
  "quente",
  "intenso",
  "Sábio",
  "zeloso",
  "desapegado",
  "faceiro",
  "companheiro",
  "empenhado",
  "espantoso",
  "traidor",
  "perfeccionista",
  "Qualificado",
  "feio",
  "tolerante",
  "orgulhoso",
  "ignorante",
  "lutador",
  "desejado",
  "exigente",
  "nostálgico",
  "próspero",
  "compreensivo",
  "excelente",
  "estourado",
  "malvado",
  "windsurfista",
  "verdadeiro",
  "melhor",
  "terno",
];

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  const size = 50;
  const response = [];

  const randomText = () => {
    const words = [
      "o céu",
      "acima",
      "do porto",
      "estava",
      "da cor da televisão",
      "ajustada",
      "para",
      "um canal morto",
      ".",
      "Tudo",
      "isso aconteceu",
      "mais ou menos",
      ".",
      "Eu",
      "tive",
      "a história",
      "pouco a pouco",
      "de várias pessoas",
      "e",
      "como geralmente",
      "acontece",
      "em tais casos",
      "cada vez",
      "era",
      "uma história diferente",
      ".",
      "Isso",
      "foi",
      "um prazer",
      "queimar",
    ];
    let text = [];
    let x = 80;
    while (--x) text.push(words[Math.floor(Math.random() * words.length)]);

    return text.toString().replaceAll(",", " ");
  };

  const randomTitle = () => {
    const ramdomNumber1 = Math.floor(Math.random() * 50);
    const ramdomNumber2 = Math.floor(Math.random() * 50);

    return verbs[ramdomNumber1] + " " + adjectives[ramdomNumber2];
  };

  const getProduct = () => {
    for (let i = 0; i < size; i++) {
      const title = randomTitle();
      const text = randomText();

      response.push({
        id: i,
        title: title,
        thumbnail: `https://picsum.photos/200/200?random=${Math.floor(
          Math.random() * 65536
        )}`,
        description: text,
        price: 10 + title.length * ((500 - text.length) / (4 - title.length)),
      });
    }

    setProducts(response);
    localStorage.setItem("allProducts", JSON.stringify(response));
  };

  useEffect(() => {
    getProduct();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    (loading && <Loading />) || (
      <ProductsSection className="container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </ProductsSection>
    )
  );
}

export default Products;
