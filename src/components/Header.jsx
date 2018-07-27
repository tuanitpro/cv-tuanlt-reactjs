import React, {
    Component
} from 'react';
import { Container } from 'reactstrap';

class Header extends Component {

  

    render(){
        return(
            <header>
                <Container>
                <div className="intro-text wow fadeInDown animated">
                    <div className="intro-lead-in"></div>
                    <div className="intro-heading">Hi, I’m Tuan</div>
                    <a href="#about" className="page-scroll btn btn-x2">More About Me</a>
                </div>
                </Container>
            
        </header>
        )
    }
}
export default Header;