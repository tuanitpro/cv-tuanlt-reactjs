import React, {
    Component
} from 'react';
import { Container, Row, Col } from 'reactstrap';
import resources from '../Resources';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                    <Col md="4">
                    <span className="copyright">{resources.the_resume} of <a href="http://tuanitpro.com" target="_blank">{resources.title}</a> &copy; 2018</span>
                    </Col>
                    <Col md="8">
                    <ul className="list-inline social-buttons">
                        <li><a href="https://twitter.com/tuanitpro"><i className="fa fa-twitter wow bounceIn animated"></i></a></li>
                        <li><a href="https://fb.com/tuanitpro"><i className="fa fa-facebook wow bounceIn animated"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/tuanitpro/"><i className="fa fa-linkedin wow bounceIn animated"></i></a></li>
                        <li><a href="https://twitter.com/tuanitpro"><i className="fa fa-github wow bounceIn animated"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble wow bounceIn animated"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram wow bounceIn animated"></i></a></li>
                        
                    </ul>
                    </Col>
                    </Row>
                </Container>
                
   
    </footer>
        )
    }
}
export default Footer;