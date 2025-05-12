import { Container, Nav } from "react-bootstrap"
import { Facebook, Instagram,Telegram,Tiktok,Youtube } from "react-bootstrap-icons"

const Footer = () => {
    return(
    <Container fluid className="FooterContainer xs={12} sm={6} md={4} lg={3}">
    <Nav className="FooterNav">
    <div className="d-flex flex-row mt-4">
        <span className="d-flex flex-column mr-4">
        <h5>HELP</h5>
        <p>chi siamo</p>
        <p>Contattaci</p>
        <p>FAQ</p>
        </span>
        <span className="d-flex flex-column ms-4 ps-4 ">
            <h5>AREA LEGALE</h5>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </span>
    </div>

    <div className="ms-5 icons d-flex flex-row">
          <Telegram className="me-3" />
          <Tiktok className="me-3 mt-1" />
          <Youtube className="me-3 mt-1" />
          <Instagram className="me-3 mt-1" />
          <Facebook className="me-3 mt-1" />
    </div>

    </Nav>
</Container>
);    
};
export default Footer;