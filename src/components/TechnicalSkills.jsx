import React, {
    Component
} from 'react';
import FlipMove from 'react-flip-move';
import { Container, Row, Col } from 'reactstrap';
import Skill from './Skill'
import resources from '../Resources';
import 'react-circular-progressbar/dist/styles.css';
class TechnicalSkills extends Component {
    render() {
        return (
            <section id="skills" className="skills">
            <Container>
              <Row>
              <Col lg="12">
                  <div className="text-center">
                    <h2 className="section-heading">{resources.text_techical_skills}</h2>
                    <h3 className="section-subheading text-muted">
                        {resources.text_main_techical_skills}
                    </h3>      
                  </div>              
                </Col>
              </Row>
            </Container>
            <div className ="container">
               
                    
           
            <Row>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
         
          <FlipMove duration={250} easing="ease-out">
           <Skill percentage={90}/><br/>
            <h4>Full Stack</h4>
            <p>
                     Software
                    Development, Architecture                    software, OS, Database
            </p>
            </FlipMove>
          </div>          
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
          <Skill percentage={90}/><br/>
            <h4>C#, Backend</h4>
            <p>Half of my projects are working with C# Winform, NET Framework, WPF..</p>
          </div>
        </div>
       
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
          <Skill percentage={90}/><br/>
            <h4>.NET Mvc, .NET Core, API</h4>
            <p>Over 5 years with C#, I'm very familiar with this and can handle a project from nothing to release</p>
          </div>
        </div>                     
 </Row>
 <Row>
 <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
          <Skill percentage={80}/><br/>
            <h4>Design Pattern, Di/IoC, ORM</h4>
            <p>Good knowledge of Desing Pattern and apply to project, Good knowledge of ORM: EF, BLToolkit, Dapper</p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
          <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
          <Skill percentage={80}/><br/>
            <h4>Frontend</h4>
            <p>HTMl, CSS, Javascript, AngularJs, Angular 5</p>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
                <Skill percentage={80}/><br/>
                  <h4>Open source </h4>
                  <p>NopeCommerce..</p>
                </div>
              </div>
 </Row>
      <Row>
                <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                  <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                  <Skill percentage={90}/><br/>                
                    <h4>Critial thiking, Open-minded</h4>
                    <p>
                             
                    </p>
                  </div>
                </div>
                <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                  <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> 
                  <Skill percentage={90}/><br/>
                    <h4>Communication</h4>
                    <p></p>
                  </div>
                </div>
               
                <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea">
                  <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
                  <Skill percentage={90}/><br/>
                    <h4>Research skill</h4>
                    <p>I also can work under pressure and have strong passion for learning new things</p>
                  </div>
                </div>
                </Row>

            </div>
        </section>
        )
    }
}
export default TechnicalSkills;