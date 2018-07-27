import React, {
    Component
} from 'react';
 
import { Container, Row, Col, Button } from 'reactstrap';
 
class ContactForm extends Component {
    render(){
        return (
            <form name="sentMessage" id="contactForm">
                 <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" id="name" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email" id="email" required data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone" id="phone" required data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                
                                <button type="submit" className="btn btn-x3">Send Message</button>        
            
             </form>
        )
    }
}
export default ContactForm;