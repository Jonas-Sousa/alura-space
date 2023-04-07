import styles from "./Pagina-inicial.module.scss"
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from "./banner.png"
import Galeria from "../../componentes/Galeria";
import Populares from "../../componentes/Populares";

export default function PaginaInicial () {
    
    return(
        <body>
            <nav>
                <Cabecalho/>
            </nav>
            <main>
                <section className={styles.principal}>
                    <Menu />

                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={Banner} alt="" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
        </body>
    )
}