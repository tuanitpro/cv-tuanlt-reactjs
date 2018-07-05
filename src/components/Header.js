import React, {
    Component
} from 'react';

class Header extends Component {

  

    render(){
        return(
            <header>
            <div className ="container">
                <div className="intro-text wow fadeInDown animated">
                    <div className="intro-lead-in"></div>
                    <div className="intro-heading">Hi, I’m Tuan</div>
                    <a href="#about" className="page-scroll btn btn-x2">More About Me</a>
                </div>
            </div>
        </header>
        )
    }
}
export default Header;