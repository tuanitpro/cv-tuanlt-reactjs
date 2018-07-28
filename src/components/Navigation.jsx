import React, {
    Component
} from 'react';
import resources from '../Resources';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
class Navigation extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
          <Container>
          <Row>
            <Col lg="12">
          <Navbar  color="light" light expand="md" fixed="top" className="navbar-default">
          <NavbarBrand href="#page-top">{resources.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">{resources.menu_about}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">{resources.menu_skills}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">{resources.menu_work_experience}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#resume">{resources.menu_resume}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">{resources.menu_contact}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>             
        </Col>
        </Row>
        </Container>
        )
    }
}
export default Navigation;