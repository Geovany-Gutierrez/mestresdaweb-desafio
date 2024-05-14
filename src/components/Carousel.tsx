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
  Icone,
  RatingTitle,
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
const CarouselCard = ({ categoria }: { categoria: string }) => {
  const [categoriaAtual, setCategoriaAtual] = useState<string>(categoria);
  // Estado para armazenar a lista de cards
  const [lista, setLista] = useState<CardInfo[]>([]);
  // Estado para armazenar a lista completa de filmes para filtragem
  const [listaCompleta, setListaCompleta] = useState<CardInfo[]>([]);

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
        <StyledCardExpand>
          <StyledExpandWrapper>
            <StyledExpandTitle>{item.name}</StyledExpandTitle>
            {categoriaAtual === "personagens" ? (
              <ul>
                <StyledImageTitle>Aparições</StyledImageTitle>
                {/* Lista de aparições para personagens */}
                {item.aparicoes?.map((aparicao, index) => (
                  <StyledImageText key={index}>{aparicao}</StyledImageText>
                ))}
              </ul>
            ) : categoriaAtual === "filmes" ? (
              <StyledExpandText>
                <StyledImageText>{item.description}</StyledImageText>
                <h3>Disponível para Streaming:</h3>
                {/* Renderiza o ícone de streaming se disponível */}
                {item.streaming && (
                  <Icone src={item.streaming} alt="Streaming Service" />
                )}
              </StyledExpandText>
            ) : categoriaAtual === "hqs" ? (
              <ul>
                <StyledImageText>{item.description}</StyledImageText>
                <h3>Disponível para compra:</h3>
                {/* Renderiza os ícones das lojas se disponíveis */}
                {item.disponivelParaCompra?.map((url, index) => (
                  <Icone key={index} src={url} alt="Store" />
                ))}
              </ul>
            ) : null}

            <RatingTitle>Avaliações dos Fãs</RatingTitle>
            <div>
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
        </StyledCardExpand>
      )}
    </StyledCardContainer>
  );
};

export default CarouselCard;
