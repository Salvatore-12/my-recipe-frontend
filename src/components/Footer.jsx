import { Container, Nav } from "react-bootstrap"
import { Facebook, Instagram,Telegram,Tiktok,Youtube } from "react-bootstrap-icons"

const Footer = () => {
    return(
    <Container fluid className="FooterContainer">
    <Nav>
    <div className="d-flex flex-row ms-4 ps-5 mt-4 mt-3">
        <span className="d-flex flex-column ms-4 ps-4">
        <p>chi siamo</p>
        <p>Contattaci</p>
        <p>FAQ</p>
        </span>
        <span className="d-flex flex-column ms-4 ps-4 ">
            <h5>AREA LEGALE</h5>
            <p>Termini e Condizioni di Acquisto</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </span>
    </div>

    <div className="icons">
          <Telegram className="me-3" />
          <Tiktok className="me-3" />
          <Youtube className="me-3" />
          <Instagram className="me-3" />
          <Facebook className="me-3" />
    </div>

    </Nav>
</Container>
);    
};
export default Footer;