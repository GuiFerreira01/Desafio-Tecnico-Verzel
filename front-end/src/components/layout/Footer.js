import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer style={{backgroundColor: "black"}}  className={styles.footer}>
      <div style={{display: "block"}} className={styles.footer_container}>
        <div className={styles.footer_fex}>
        <div style={{display: "flex"}} className={styles.footer_logo}>
          <svg viewBox="0 0 7774 2048">
            <path 
              d="M7296.82.052L6752.798 1024l544.022 1023.948h477.424L7239.034 1024 7774.244.052zm-1130.746 0v1705.534L5275.298.052 4205.476 2047.954h470.514l599.916-1147.71 254.406 487.47h-254.406l-178.412 341.108h611.236l166.464 319.132h726.816V.052h-435.96zm-1767.734 0l-599.916 1147.71L3199.138.052h-470.514l1069.822 2047.902L4868.268.052H4398.39zm-2076.172 0l-892.04 1707.424L1072.7 1024 1607.91.052h-477.424L586.464 1024l544.022 1023.948h593.006l166.464-319.132h611.236l-178.412-341.108h-254.406l254.406-487.47 598.678 1147.71h470.514L2322.15.046zM-.244 2047.952h435.33V.05H-.244z">
            </path>
          </svg>
        </div>
        <div className={styles.footer_content}> 
          <div className="texto-footer">
            <li>
              <Link href="#">
                  Comprar carro
              </Link>
            </li>
            <li>
              <Link href="#">
                  Vender carro
              </Link>
            </li>
            <li>
              <Link href="#">
                  App kavak
              </Link>
            </li>
            <li>
              <Link href="#">
                  Onde estamos
              </Link>
            </li>
          </div> 
        <div className="texto-footer">
            <li>
                <Link href="#">
                    Perguntas frequentes
                </Link>
            </li>
            <li>
                <Link href="#">
                    Blog
                </Link>
            </li>
            <li>
                <Link href="#">
                    Guia de preços
                </Link>
            </li>
            <li>
                <Link href="#">
                    Carreiras
                </Link>
            </li>
        </div> 
        <div className="texto-footer">
          <li>
            <Link href="#">
                Contato
            </Link>
          </li>
          <li>
              <Link href="#">
                  Impresnsa
              </Link>
          </li>
          <li>
              <Link href="#">
                🇧🇷Brasil
              </Link>
          </li>
        </div> 
        </div>
        </div>
        <hr />

      </div>
    </footer>
  )
}

export default Footer
