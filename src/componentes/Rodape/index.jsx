import face from './facebook.png'
import insta from './instagram.png'
import twitter from './twitter.png'
import logo from '../Cabecalho/logo.png'
import styles from './Rodape.module.scss'


export default function Rodape() {
    return (
        <div className={styles.rodape__container}>
            <figure className={styles.icons__img}>
                <img src={face} alt="Ícone do facebook" />
                <img src={insta} alt="Ícone do instagram" />
                <img src={twitter} alt="Ícone do twitter" />
            </figure>
            <div className={styles.icon__alura}>
                <figure>
                    <img src={logo} alt="Logo Alura space" />
                </figure>
            </div>
            
        </div>
    )
}