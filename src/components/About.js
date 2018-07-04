import React, {
    Component
} from 'react';

class About extends Component {
    render(){
        return(
           
          
           <section  id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center wow fadeInDown animated">
                            <h2 className="section-heading">About me</h2>
                            <h3 className="section-subheading text-muted">.NET Developer</h3>
                        </div>
                        <div className="col-lg-4 text-center col-md-4 col-sm-4 col-xs-12 pull-right media wow zoomIn animated">
                            <img alt="" className="img-circle img-me" src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/29432191_10209247614462320_7160741214453497856_n.jpg?_nc_cat=0&oh=b3508c50f332759b862f0c2580288d9f&oe=5B8AB5D0" />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 pull-left media">
                            <h3>Lê Thanh Tuấn</h3>
                            <h4>I'm .NET &amp; Developer</h4>
                           
                            <p className="text-muted">With over 5 years working as a developer with Microsoft platform, 
                                also in charge of some positions from analyzing to developing, deploying system,
                                 I have a deep understanding about software architecture ,
                                  which enables me to learn new technology fast and easily.
        
                                </p>
                                <p className="text-muted">
                                   
                                        Good knowledge of C#-OOP, HTML, ASP/ASP.NET MVC, WPF and Windows Form Application, database programming language.
                                       
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
                        </div>
                    </div>
        
                </div>
               </section>
        
        )
    }
}
export default About;