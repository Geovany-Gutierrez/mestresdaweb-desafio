import { useState, useEffect } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import {
  StyledCardContainer,
  StyledCardExpand,
  StyledCardImage,
  StyledCarouselSlide,
  StyledCarouselWrapper,
  StyledCloseButton,
  StyledDetailsText,
  StyledExpandText,
  StyledExpandTitle,
  StyledExpandWrapper,
  StyledImageDescription,
  StyledImageText,
  StyledImageTitle,
  StyledDropdown,
  StyledGridWrapper,
} from "../styles/Body.styles";

interface CardInfo {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  aparicoes?: string[];
  streaming?: string;
  disponivelParaCompra?: string[];
  cronologia?: number;
  anoLancamento?: number;
}

// Componente principal que renderiza o carrossel de cards
const CarouselCard = () => {
  // Estado para armazenar a lista de cards
  const [lista, setLista] = useState<CardInfo[]>([]);
  // Estado para armazenar a lista completa de filmes para filtragem
  const [listaCompleta, setListaCompleta] = useState<CardInfo[]>([]);
  // Estado para armazenar a categoria atual
  const [categoriaAtual, setCategoriaAtual] = useState<string>("filmes"); // Valor padrão
  
  useEffect(() => {
    // Carregar a categoria atual do localStorage ou usar 'filmes' como padrão
    const categoriaSalva = localStorage.getItem("categoriaAtual") || "filmes";
    setCategoriaAtual(categoriaSalva);
  }, []);

  // Efeito para carregar os dados do JSON sempre que a categoria atual mudar
  useEffect(() => {
    const carregarDados = async () => {
      try {
        // Solicitação fetch para o arquivo JSON no diretório público
        const response = await fetch("/data.json");
        const data = await response.json();

        // Atualizar a lista com os dados da categoria salva
        setLista(data[categoriaAtual]);
        // Se a categoria for 'filmes', salvar a lista completa para filtragem
        if (categoriaAtual === "filmes") {
          setListaCompleta(data[categoriaAtual]);
        }
      } catch (error) {
        // Em caso de erro, logar no console
        console.error("Falha ao carregar os dados:", error);
      }
    };

    // Chamar a função de carregar dados
    carregarDados();
  }, [categoriaAtual]);

  // Função para filtrar filmes por cronologia ou ano de lançamento
  const filtrarFilmes = (filtro: string): void => {
    let listaFiltrada: CardInfo[] = [];
    if (filtro === "cronologia") {
      // Ordenar a lista de filmes pela cronologia do MCU
      listaFiltrada = [...listaCompleta].sort(
        (a, b) => (a.cronologia || 0) - (b.cronologia || 0)
      );
    } else if (filtro === "anoLancamento") {
      listaFiltrada = [...listaCompleta].sort(
        (a, b) => (a.anoLancamento || 0) - (b.anoLancamento || 0)
      );
    }
    setLista(listaFiltrada);
  };

  return (
    <StyledGridWrapper>
      {/* Dropdown para filtrar filmes por cronologia ou lançamento */}
      {categoriaAtual === "filmes" && (
        <StyledDropdown
          onChange={(e: { target: { value: string } }) =>
            filtrarFilmes(e.target.value)
          }
        >
          <option value="cronologia">Cronologia</option>
          <option value="anoLancamento">Lançamento</option>
        </StyledDropdown>
      )}
      <StyledCarouselWrapper>
        {/* Renderização dos cards */}
        {lista.map((item, index) => (
          <StyledCarouselSlide key={index}>
            <Card item={item} categoriaAtual={categoriaAtual} />
          </StyledCarouselSlide>
        ))}
      </StyledCarouselWrapper>
    </StyledGridWrapper>
  );
};

// Componente Card individual
const Card = ({
  item,
  categoriaAtual,
}: {
  item: CardInfo;
  categoriaAtual: string;
}): JSX.Element => {
  // Estado para controlar se o card está expandido
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Função para alternar o estado de expansão do card
  const toggleExpand = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledCardContainer $isExpanded={isExpanded}>
      <StyledCardImage $imageUrl={item.imageUrl}>
        {!isExpanded && (
          // Conteúdo do card quando não está expandido
          <StyledImageDescription>
            <StyledImageTitle>{item.name}</StyledImageTitle>
            <StyledImageText>{item.description}</StyledImageText>
            <StyledDetailsText onClick={toggleExpand}>
              Ver detalhes
            </StyledDetailsText>
          </StyledImageDescription>
        )}
      </StyledCardImage>
      {isExpanded && (
        // Conteúdo do card quando está expandido
        <StyledCardExpand>
          <StyledExpandWrapper>
            <StyledExpandTitle>{item.name}</StyledExpandTitle>
            {/* Exibição condicional baseada na categoria */}
            {categoriaAtual === "personagens" ? (
              <ul>
                {/* Lista de aparições para personagens */}
                {item.aparicoes?.map((aparicao, index) => (
                  <li key={index}>{aparicao}</li>
                ))}
              </ul>
            ) : categoriaAtual === "filmes" ? (
              <StyledExpandText>
                <h3>Disponivel para Streaming:</h3>{" "}
                <ul>
                  <li>{item.streaming}</li>
                </ul>
              </StyledExpandText>
            ) : categoriaAtual === "hqs" ? (
              <ul>
                <h3>Disponivel para compra: </h3>
                {/* Lista de lojas disponíveis para compra para HQs */}
                {item.disponivelParaCompra?.map((loja, index) => (
                  <li key={index}>{loja}</li>
                ))}
              </ul>
            ) : null}
            <h3>Avaliações dos Fãs</h3>
            <div>
              {/* Ícones de estrela para avaliação */}
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <StyledCloseButton onClick={toggleExpand}>
              <FaTimes size={20} />
            </StyledCloseButton>
          </StyledExpandWrapper>
          {/* Botão para fechar a expansão do card */}
        </StyledCardExpand>
      )}
    </StyledCardContainer>
  );
};

export default CarouselCard;
