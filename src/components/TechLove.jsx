import React, {
    Component
} from 'react';
 
import { Container, Row, Col } from 'reactstrap';
import img1 from '../img/logos/c-liogo1.png';
import img2 from '../img/logos/c-liogo2.png';
import img3 from '../img/logos/c-liogo3.png';
import img4 from '../img/logos/c-liogo4.png';
class TechLove extends Component {
    render(){
        return(                           
           <aside className="clients bg-clients">
            <Container>
                <Row>
                    <Col md="3">
                    <img src={img1} height="34px" className="img-responsive img-centered" alt="" /> 
                    </Col>
                    <Col md="3">
                    <img src={img2} height="34px" className="img-responsive img-centered" alt="" /> 
                    </Col>
                    <Col md="3">
                    <img src={img3} height="34px" className="img-responsive img-centered" alt="" /> 
                    </Col>
                    <Col md="3">
                    <img src={img4} height="34px" className="img-responsive img-centered" alt="" /> 
                    </Col>
                </Row>
            </Container>
            </aside>                              
        )
    }
}
export default TechLove;