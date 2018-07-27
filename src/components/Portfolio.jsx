import React, {
    Component
} from 'react';
import PortfolioItem from './PortfolioItem';
import FlipMove from 'react-flip-move';
import { Container, Row, Col } from 'reactstrap';
import Skill from './Skill'
import resources from '../Resources';

class Portfolio extends Component{
    render(){
        return(
        <section id="portfolio">
        <Row>
       <Col lg="12">
		<div className=" text-center ">
			<h2 className="section-heading">WORK EXPERIENCE</h2>
			<h3 className="section-subheading text-muted">HIGHLIGHT PROJECTS</h3>		 
	</div>
    </Col>
        </Row>
           <Row>
               <Col lg="12">
               <ul className="timeline">
               <li className="timeline-inverted">
					<div className="timeline-image">
						<span className="ico">
							<i className="fa fa-briefcase"></i>
						</span>
					</div>
					<div className="timeline-panel">
						<div className="timeline-heading">
							<h2 className="subheading">Work Experience</h2>
						</div>
						<div className="timeline-body">
							<p className="text-muted">5 years of experience in C#.
                                                Have good experiences with JQuery, Javascript, AngularJs.
                                                Have experiences with Bootstrap/HTML.
                                                In charge of many project since beginning to production.
                                                Well structured mindset, can learn new technique & business model easily.
                                                Strong foundation with database design and T-SQL.</p>
						</div>
					</div>
				</li>
              
                <PortfolioItem 
                mainTitle="Freelancer"
                subTitle="Developer/Team Leader"
                from="2010"
                to="Present"
                >
                <h6>  Main responsibilities:</h6>
									<p className="text-muted">
                                            
                                              
                                                        – Meeting with clients to gather the requirements.
                                                  
										<br/>
                                                        – Designing the system flow & architecture, database schema…
                                                        
										<br/>
                                              
                                               
                                                – Planning task & set project minestones & goals.
                                                
										<br/> – Work as developer.
                                                
										<br/> – Support team member to finish tasks.
                                                
										<br/> – Solving problems when needed.
                                                
										<br/>  – Making tests.
                                                
                                               
                                        
									</p>
									<h6>   Achievements and skills gained:</h6>
									<p className="text-muted">
                                         – Improve team leading skill.
                                        
										<br/> – Improve task management skill.
                                        
										<br/> – Improve requirement gathering skill.
                                        
										<br/> – Improve develop/programming skill
                                    
									</p>
                
                </PortfolioItem>
                <PortfolioItem  className="timeline-inverted"
                mainTitle="Gia Khanh Land Company"                
                subTitle="Main Developer"
                from="Jan 2018"
                to="May 2018"
                >
               <h6>About project:</h6>
											<p className="text-muted">
                                                SEO Application (Auto SEO) / Application support for SEOer.
                                            </p>
											<h6>  Platform & Techniques:</h6>
											<p className="text-muted"> C#, Entity Framework, SQL Lite </p>
											<h6>Team with 2 members</h6>
											<h6>  Main responsibilities:</h6>
											<p className="text-muted"> 
                                                Business Analyst / Main Developer
                                                
												<br/> – Communicating with clients/departments & deriving requirements.
                                                
												<br/>  – Define business flow.                                                
                                                
												<br/>  – Meeting with project manager to define milestone & release schedule.
                                        
											</p>
											<h6>Recognition and Gains:</h6>
											<p className="text-muted"> 
                                          
                                                – Improve business analyzing skill.
                                                
												<br/> – Develop teamwork spirit.
                                        
											</p>
                </PortfolioItem>
                   
                <PortfolioItem 
                mainTitle="QUIZZ APPLICATION"
                subTitle="Main Developer"
                from="JAN 2018"
                to="MAY 2018"
                >
               <p className="text-muted">Build on deman</p>
													<h6>About project:</h6>
													<p className="text-muted">
                                            Quizz Application Online for IT Faculty of University Dalat
                                            </p>
													<h6>  Platform & Techniques:</h6>
													<p className="text-muted">.NET Core, Angular 5. SQL Server, Entity Framework</p>
													<h6>  Role & Responsibility</h6>
													<p className="text-muted"> 
                                               - Work as Business Analyst and Project Manager.
                                                
														<br/> – Research and support technical team.
                                                
														<br/>  – Define business flow.  
                                                
														<br/>  – Design database architecture..                                                
                                                
														<br/>  – Solve problems when needed.
                                                
														<br/>  – Planning, scheduling & testing.
                                                
														<br/>  – Deploy system to clients.
                                        
													</p>
                
                </PortfolioItem>
                
               </ul>
               </Col>
           </Row>
        </section>
        )
    }
}

export default Portfolio