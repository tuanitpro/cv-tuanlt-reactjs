import React, {
    Component
} from 'react';
 
import { Container, Row, Col } from 'reactstrap';
 import ContactForm from './ContactForm';
class Contact extends Component {
    render(){
        return(                           
           <section id="contact">
            <Container>
                <Row>
               <Col md="12">
                <div className=" text-center ">
                    <h2 className="section-heading">Get In Touch</h2>
                    <h3 className="section-subheading text-dark">Thanks for visiting my page.</h3>
                </div>
            </Col>
                </Row>
               
                <Row>
                    <Col md="7">
                    <ContactForm />
                    </Col>
                    <Col md="5">
                    <div className="form-text wow fadeIn animated">
                                    <h4>Contact details</h4>
                                    <p>  
                                            If you want to keep me in reach, please don’t be hesitate to contact me via:</p>
                                    <p className="wow fadeInUp animated"> <i className="fa fa-map-marker fa-lg"></i> 06 Hoa Cúc, Phú Nhuận, Hồ Chí Minh City</p>
                                    <p className="wow fadeInUp animated"> <i className="fa fa-mobile fa-lg"></i> +84 976060432</p>
                                    <p className="wow fadeInUp animated"> <i className="fa fa-envelope-o"></i> tuanitpro@gmail.com</p>
                                    <p className="wow fadeInUp animated"> <i className="fa fa-link"></i> 
                                        <a href="http://tuanitpro.com" target="_blank" rel="noopener noreferrer" >http://tuanitpro.com</a></p>
                                </div>
                    </Col>
                </Row>
                
            </Container>
            </section>                              
        )
    }
}
export default Contact;