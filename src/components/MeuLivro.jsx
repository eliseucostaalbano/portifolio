import HTMLFlipBook from 'react-pageflip';
import Pagina from './page';
import Capa  from './Paginas/Capa/Capa';
import ImgCapa from '../assets/capa.png';
import EndImg from '../assets/ultima-pagina.png';
import PrimeiraPagina from './Paginas/Hero/Hero';
import Habilidades from './Paginas/Habilidades/Habilidades';
import Serviços from './Paginas/Serviços/Serviços';
import Sobre from './Paginas/Sobre/Sobre';
import Projeto from "./Paginas/Projeto/Projeto";

import ProjetoImg1 from '../assets/Projetos/Jogo de cartas.png';
import ProjetoImg2 from '../assets/Projetos/2048.png';
import ProjetoImg3 from '../assets/Projetos/jogo do dino chorme.png';
import ProjetoImg4 from '../assets/Projetos/site ecomerrce.png';
import ProjetoImg5 from '../assets/Projetos/jogo canvas.png';
import ProjetoImg6 from '../assets/Projetos/Space Invanders.png';

const ProjetoData = [
  {
    nome: "Ache os As",
    descrição: "Um simples jogo de cartas onde o jogador deve encontrar o As o maoir número de vezes.",
    imagem: ProjetoImg1 ,
    previewLink: "https://ache-os-as.netlify.app/",
  },
  {
    nome: "Jogo 2048",
    descrição: "Um simples jogo de 2048 onde o jogador deve juntar os números até chegar a 2048 ou mais.",
    imagem: ProjetoImg2,
    previewLink: "https://jogo2048.netlify.app/",
    },
]
const ProjetoData2 = [
  {
    nome: "Jogo do Dinossauro",
    descrição: "Um simples jogo do dinossauro onde o jogador deve pular os obstáculos.",
    imagem: ProjetoImg3,
    previewLink: "https://eliseucostaalbano.github.io/Jogo-do-dino-chorme/",
  },
  {
    nome: "Ecommerce website",
    descrição: "Um simples site de ecommerce Usando React e TailWind.",
    imagem: ProjetoImg4,
    previewLink: "https://eliseu-ecomerrce.netlify.app/",
  },
];

const ProjetoData3 = [
  {
    nome: "jogo simples",
    descrição: "Um simples jogo onde o jogador deve clicar no botão  e acertar as bolas para ganhar.",
    imagem: ProjetoImg5,
    previewLink: "https://eliseucostaalbano.github.io/jogo-canvas/",
  },
  {
    nome: "Jogo space invaders",
    descrição: "Um simples jogo de nave onde tem que derrotar todos os inimigos para para ganhar.",
    imagem: ProjetoImg6,
    previewLink: "https://eliseucostaalbano.github.io/space-invaders/",
  },
];



function MeuLivro() {
    return (
        <HTMLFlipBook width={600} height={700} showCover={true}>
            <Pagina number={1}>
            <Capa coverImg={ImgCapa} title="Meu Portifólio" />
            </Pagina>
            <Pagina number={2}>
                <PrimeiraPagina />
            </Pagina> 
            <Pagina number={3}>
             <Habilidades />
            </Pagina>
            <Pagina number={4}>
            <Serviços />
            </Pagina>
            <Pagina number={5}>  
             <Sobre />
            </Pagina>
            <Pagina number={6}>
                <Projeto ProjetoData={ProjetoData} />
            </Pagina>
            <Pagina number={7}>
                <Projeto ProjetoData={ProjetoData2} />
            </Pagina>
            <Pagina number={8}>
                <Projeto ProjetoData={ProjetoData3} />
            </Pagina>
            <Pagina number={9}>
            </Pagina>
            <Pagina number={10}>
                <Capa coverImg={EndImg} title="Obrigado" />
            </Pagina>
        </HTMLFlipBook>
    );
}

export default MeuLivro