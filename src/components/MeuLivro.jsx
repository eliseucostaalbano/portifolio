import HTMLFlipBook from 'react-pageflip';
import Pagina from './page';
import Capa  from './Paginas/Capa/Capa';
import ImgCapa from '../assets/capa.png';
import EndImg from '../assets/ultima-pagina.png';
import PrimeiraPagina from './Paginas/Hero/Hero';
import Habilidades from './Paginas/Habilidades/Habilidades';
import Serviços from './Paginas/Serviços/Serviços';
import Sobre from './Paginas/Sobre/Sobre';

import ProjetoImg1 from '../assets/Projetos/Jogo de cartas.png';
import ProjetoImg2 from '../assets/Projetos/2048.png';
import ProjetoImg3 from '../assets/Projetos/jogo do dino chorme.png';
import ProjetoImg4 from '../assets/Projetos/site ecomerrce.png';

const ProjectData = [
  {
    nome: "Ache os As",
    descrição: "Um simples jogo de cartas onde o jogador deve encontrar o As .",
    image: ProjetoImg1 ,
    previewLink: "https://ache-os-as.netlify.app/",
  },
  {
    nome: "Jogo 2048",
    descrição: "Um simples jogo de 2048 onde o jogador deve juntar os números até chegar a 2048 ou mais.",
    image: ProjetoImg2,
    previewLink: "https://jogo2048.netlify.app/",
    },
]
const ProjectData2 = [
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
             <Capa coverImg={EndImg} title="Obrigado" />
            </Pagina>
        </HTMLFlipBook>
    );
}

export default MeuLivro