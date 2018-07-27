import React, {
    Component
} from 'react';
 
import { Container, Row, Col } from 'reactstrap';
class Resume extends Component {
    render(){
        return(                           
            <section id="resume">
            <Container>

               <Row>
                   <Col md="12">
                    <div className="text-center">
                        <h2 className="section-heading">Resume</h2>
                        <h3 className="section-subheading text-muted">Think big, start small and act fast - Stay hungry, stay loolish.</h3>
                    </div>
                    </Col>
                </Row>
              <Row>
              
                   <Col md="12">
                        <ul className="timeline">
    
                                                    
                            <li className="timeline-inverted">
                                <div className="timeline-image wow zoomIn animated">
                                    <span className="ico">
                                        <i className="fa fa-graduation-cap"></i>
                                    </span>
                                </div>
                                <div className="timeline-panel wow fadeInRight animated">
                                    <div className="timeline-heading">
                                        <h2 className="subheading">Education</h2>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image wow zoomIn animated">
                                    <h4>2007
                                        <br />-
                                        <br />2012
                                    </h4>
                                </div>
                                <div className="timeline-panel wow fadeInLeft animated">
                                    <div className="timeline-heading">
                                        <h4>Dalat University</h4>
                                        <h4 className="subheading">IT Engineer</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Information Technology</p>
                                    </div>
                                </div>
                            </li>
                            
                            
                            
                        </ul>
                   </Col>
                

              </Row>
                </Container>
        </section>                                 
        )
    }
}
export default Resume;