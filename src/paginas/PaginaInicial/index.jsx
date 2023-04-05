import styles from "./Pagina-inicial.module.scss"
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from "./banner.png"

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
            </main>
        </body>
    )
}