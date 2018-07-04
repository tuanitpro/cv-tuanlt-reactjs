import React, {
    Component
} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">The Resume of <a href="http://tuanitpro.com" target="_blank">Lê Thanh Tuấn</a> &copy; 2018</span>
                </div>
                
                <div className="col-md-8">
                    <ul className="list-inline social-buttons">
                        <li><a href="https://twitter.com/tuanitpro"><i className="fa fa-twitter wow bounceIn animated"></i></a></li>
                        <li><a href="https://fb.com/tuanitpro"><i className="fa fa-facebook wow bounceIn animated"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/tuanitpro/"><i className="fa fa-linkedin wow bounceIn animated"></i></a></li>
                        <li><a href="https://twitter.com/tuanitpro"><i className="fa fa-github wow bounceIn animated"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble wow bounceIn animated"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram wow bounceIn animated"></i></a></li>
                        
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
        )
    }
}
export default Footer;