import React, {
    Component
} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className ="navbar navbar-default navbar-fixed-top">
            <div className ="container">
                <div className ="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className ="sr-only">Toggle navigation</span>
                        <span className ="icon-bar"></span>
                        <span className ="icon-bar"></span>
                        <span className ="icon-bar"></span>
                    </button>
                    <a className ="navbar-brand page-scroll" href="#page-top">LÊ THANH TUẤN</a>
                </div>
                    
                <div className ="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className ="nav navbar-nav navbar-right">
                        <li className ="hidden"><a href="#page-top"></a></li>
                        <li><a className ="page-scroll" href="#about">About</a></li>
                        <li><a className ="page-scroll" href="#skills">Skills</a></li>                       
                        <li><a className ="page-scroll" href="#portfolio">WORK EXPERIENCE</a></li>
                        <li><a className ="page-scroll" href="#resume">Resume</a></li>
                        <li><a className ="page-scroll" href="#contact">Contact</a></li>
                    </ul>
                </div>              
    
            </div>
        </nav>
        )
    }
}
export default Navigation;