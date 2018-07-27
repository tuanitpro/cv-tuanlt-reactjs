import React, {
    Component
} from 'react';
import resources from '../Resources';
class Navigation extends Component {
    componentDidMount() {
        
    }
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
                    <a className ="navbar-brand page-scroll" href="#page-top">{resources.title}</a>
                </div>
                    
                <div className ="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className ="nav navbar-nav navbar-right">
                        <li className ="hidden"><a href="#page-top"></a></li>
                        <li><a className ="page-scroll" href="#about">{resources.menu_about}</a></li>
                        <li><a className ="page-scroll" href="#skills">{resources.menu_skills}</a></li>                       
                        <li><a className ="page-scroll" href="#portfolio">{resources.menu_work_experience}</a></li>
                        <li><a className ="page-scroll" href="#resume">{resources.menu_resume}</a></li>
                        <li><a className ="page-scroll" href="#contact">{resources.menu_contact}</a></li>
                    </ul>
                </div>              
    
            </div>
        </nav>
        )
    }
}
export default Navigation;