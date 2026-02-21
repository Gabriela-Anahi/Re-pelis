const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                {/* <div className="row row-cols-2"> */}
                    <div>
                        <a href="/" className="p-0 m-0 fw-bold footer-link">
                            <img src="./logo.svg" alt="Re-pelis" width="32" height="auto" />
                        </a>
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/legal">Términos y Aviso de privacidad</a>
                        </li>
                        <li>
                            <a href="/contact">Comentarios</a>
                        </li>
                        <li>
                            <a href="/help/">Ayuda</a>
                        </li>
                        <li>© 2025-2026, Re-pelis S.A.</li>
                    </ul>
                {/* </div> */}
            </footer>
        </>
    )
}

export default Footer