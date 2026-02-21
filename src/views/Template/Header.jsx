import { Nav, Navbar, Container, NavDropdown, Image } from "react-bootstrap"
import "./Styles.css"

// Componente funcional Header
// Se encarga de renderizar la barra de navegación superior de la aplicación
const Header = () => {
    return (
        // Navbar de react-bootstrap con tema oscuro
        <Navbar className="nav">

            {/* Container mantiene el contenido centrado y con márgenes responsivos */}
            <Container>
                <a href="/">
                    {/* brand: título o logo de la aplicación */}
                    <Image src="./logo.svg" alt="Re-pelis" width="42" height="auto" />
                </a>

                {/* Sección de navegación (links) centrada */}
                <Nav className="mx-auto">
                    {/* Enlaces de navegación dentro de la app */}
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/recientes">Ultimos lanzamientos</Nav.Link>
                    <Nav.Link href="/populares">Populares</Nav.Link>
                    <Nav.Link href="/buscar">Buscar</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

// Exporta el componente para poder usarlo en otras partes de la aplicación
export default Header