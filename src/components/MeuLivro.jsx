import HTMLFlipBook from 'react-pageflip';
import Pagina from './page';
import Capa  from './Paginas/Capa/Capa';
import ImgCapa from '../assets/capa.png';
import EndImg from '../assets/ultima-pagina.png';
import PrimeiraPagina from './Paginas/Hero/Hero';
import Habilidades from './Paginas/Habilidades/Habilidades';
import Serviços from './Paginas/Serviços/Serviços';
import Sobre from './Paginas/Sobre/Sobre';

function MeuLivro(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover={true}>
            <Pagina number={1}>
            <Capa coverImg={ImgCapa} title="Meu Portifolio" />
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