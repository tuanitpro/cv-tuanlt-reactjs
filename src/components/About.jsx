import React, {
    Component
} from 'react';

import { Container, Row, Col } from 'reactstrap';

class About extends Component {
    render(){
        return(                     
           <section  id="about">
                <Container>
                    <Row>

                        <Col lg="7">
                        <div className="text-center">
                            <h2 className="section-heading">About me</h2>
                            <h3 className="section-subheading text-muted">.NET Developer</h3>
                        </div>
                            <h3>Lê Thanh Tuấn</h3>
                            <h4>I'm .NET &amp; Developer</h4>
                           
                            <p className="text-muted">With over 5 years working as a developer with Microsoft platform, 
                                also in charge of some positions from analyzing to developing, deploying system,
                                 I have a deep understanding about software architecture ,
                                  which enables me to learn new technology fast and easily.
        
                                </p>
                                <p className="text-muted">                                   
                                        Good knowledge of C#-OOP, SOLID Principles, HTML, ASP/ASP.NET MVC, WPF and Windows Form Application, database programming language.                                       
                                        Clean code.
                                </p>
                                <p className="text-muted">
                                        Good knowledge of HTML, CSS, JavaScript, Ajax Angular JS, Typescript (object oriented with JavaScript, HTML standard compliance, HTM5/CSS3)
                                             
                                    </p>
                                    <p className="text-muted">
                                                Good knowledge of .NET Framework (C#/VB.NET), OOP Design Principles
                                              
                                        </p>
                                        <p className="text-muted">
                                                 Good knowledge of Windows Services, WCF/Web Service/ASP.NET Web APIs, .NET Core
                                              
                                        </p>
                                        <p className="text-muted">
                                                  Knowledge of some well-known application development frameworks and libraries such as Castle Windsor/Unity/Autofac, Log4Net, NHibernate/Entity Framework, ADO.NET, LinQ, …
                                          
                                       </p>
        
                            <p className="text-muted">I also can work under pressure and have strong passion for learning new things</p>
                            <p><a className="btn btn-primary btn-lg wow bounce animated" role="button" href="http://cv.tuanitpro.com/CV_TuanLT.pdf" target="_blank">Download Printable Resume</a></p>
                       
                        </Col>

                        <Col lg="5">
                        <div>
                            <img alt="" className="img-circle img-me" src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/29432191_10209247614462320_7160741214453497856_n.jpg?_nc_cat=0&oh=b3508c50f332759b862f0c2580288d9f&oe=5B8AB5D0" />
                        </div>
                        </Col>

                      

                   
                    </Row>
                </Container>
               </section>
        
        )
    }
}
export default About;