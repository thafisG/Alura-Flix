import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src="rodape.png" alt="Logo do rodapé" className={styles.imagem} />
        </footer>
    );
}

export default Rodape;