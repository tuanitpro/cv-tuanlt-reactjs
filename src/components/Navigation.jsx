import React, {
    Component
} from 'react';
import resources from '../Resources';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
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
            <div>
                  <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{resources.title}</NavbarBrand>
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
         
    
        </div>
        )
    }
}
export default Navigation;