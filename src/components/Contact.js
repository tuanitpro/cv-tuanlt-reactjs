import React, {
    Component
} from 'react';

class Contact extends Component {



    render() {
        return ( 
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center wow fadeInDown">
                            <h2 className="section-heading">Get In Touch</h2>
                            <h3 className="section-subheading text-dark">Thanks for visiting my page.</h3>
                        </div>
                    </div>
                    <div className="row">
                   
                    <div className="row">
                        <div className="col-md-7 wow fadeInUp animated">
                        <form name="sentMessage" id="contactForm">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" id="name" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email" id="email" required data-validation-required-message="Please enter your email address."/>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Your Phone" id="phone" required data-validation-required-message="Please enter your phone number."/>>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-x3 wow bounceIn animated">Send Message</button>
                            </form>
                        </div>
        
                    <div className="col-md-5">
                        <div className="form-text wow fadeIn animated">
                            <h4>Contact details</h4>
                            <p>
                                If you want to keep me in reach, please don’t be hesitate to contact me via:</p>
                            <p className="wow fadeInUp animated"> <i className="fa fa-map-marker fa-lg"></i> 06 Hoa Cúc, Phú Nhuận, Hồ Chí Minh City</p>
                            <p className="wow fadeInUp animated"> <i className="fa fa-mobile fa-lg"></i> +84 976060432</p>
                            <p className="wow fadeInUp animated"> <i className="fa fa-envelope-o"></i> tuanitpro@gmail.com</p>
                            <p className="wow fadeInUp animated"> <i className="fa fa-link"></i>
                                <a href="http://tuanitpro.com" target="_blank">http://tuanitpro.com</a></p>
                        </div>
                    </div>
                
                    <div className="clearfix"></div>
                </div>
              
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;