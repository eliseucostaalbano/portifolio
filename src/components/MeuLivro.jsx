import HTMLFlipBook from 'react-pageflip';
import Pagina from './page';


function MeuLivro(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover={true}>
            <Pagina number={1}>
            <div className="demoPage text-white text-3xl">Page 1</div> 
            </Pagina>
            <Pagina number={2}>
                <div className="demoPage text-white text-3xl">Page 2</div>
            </Pagina> 
            <Pagina number={3}>
                <div className="demoPage text-white text-3xl">Page 3</div> 
            </Pagina>
        </HTMLFlipBook>
    );
}

export default MeuLivro