import React, {
    Component
} from 'react';
import PortfolioItem from './PortfolioItem';
import FlipMove from 'react-flip-move';
import { Container, Row, Col } from 'reactstrap';
import Skill from './Skill'
import resources from '../Resources';
import img1 from '../img/logos/c-liogo1.png';
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
							<p className="text-muted">5 years of experiences in C#. 
                                                Have good experiences with JQuery, Ajax, Javascript, AngularJs, ReactJs
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
				<PortfolioItem className="timeline-inverted"
                mainTitle="CRYPTOCURENCY EXCHANGE"                
                subTitle="Team Member, Developer"
                from="OCT 201"
                to="DEC 2017"
                >
        
                                            <p className="text-muted">Build on deman</p>
    
                                            <h6>About project:</h6>
                                            <p className="text-muted">
                                                Internal Crypto Currency Exchange Platform
                                                </p>
                                                <h6>  Platform &amp; Techniques:</h6>
                                                <p className="text-muted"> C#, .Net Mvc Entity Framework, SignalR, Realtime, Crypto API </p>
                                           <h6>Team with 5 members</h6>
                                                <h6>  Main responsibilities:</h6>
                                              <p className="text-muted"> 
                                                    Team member Developer
                                                    <br /> – Communicating with clients/departments &amp; deriving requirements.
                                                    <br />  – Define business flow.
                                                    <br /> - Coding                                                  
                                                    <br />  – Meeting with project manager to define milestone &amp; release schedule.
                                            </p>
                                            <h6>Recognition and Gains:</h6>
                                            <p className="text-muted"> 
                                              
                                                    – Improve business analyzing skill.
                                                    <br /> – Develop teamwork spirit.
                                            </p>
                                        
                </PortfolioItem>

				 <PortfolioItem 
                mainTitle="HRM SOLUTION"
                subTitle="Main Developer"
                from="JUN 2017"
                to="SEP 2017"
                >
              <div >
                                            <p className="text-muted">Maintainent Outsourcing</p>
    
                                            <h6>About project:</h6>
                                            <p className="text-muted">
                                                    Maintainent for currently project of Customer, Develope new feature
                                                </p>
                                                <h6>  Platform &amp; Techniques:</h6>
                                                <p className="text-muted">.NET MVC, Angular 5. SQL Server, Entity Framework</p>
                                          
                                                <h6>  Role &amp; Responsibility</h6>
                                              <p className="text-muted"> 
                                                   - Team member
                                                    <br /> – Research and support technical team.
                                                    <br /> – Coding review
                                                    <br />  – Solve problems when needed.
                                                    
                                            </p>
                                            
                                        </div>
                
                </PortfolioItem>

					<PortfolioItem className="timeline-inverted"
                mainTitle="SCG CRM"                
                subTitle="Team Member, Developer"
                from="MAY 2017"
                to="SEP 2017"
                >
        
		<div  >
                                                <p className="text-muted">Build on deman</p>
        
                                                <h6>About project:</h6>
                                                <p className="text-muted">
                                                    Microsite, CMR for SCG
                                                    </p>
                                                    <h6>  Platform &amp; Techniques:</h6>
                                                    <p className="text-muted"> C#, .Net Mvc Entity Framework, SignalR</p>
                                               <h6>Team with 5 members</h6>
                                               <h6>  Role &amp; Responsibility</h6>
                                                  <p className="text-muted"> 
                                                        Team member Developer
                                                        <br /> – Communicating with clients/departments &amp; deriving requirements.                                                     
                                                        <br />  – Define business flow.
                                                        <br />  – Coding
                                                        <br />  – Meeting with project manager to define milestone &amp; release schedule.
                                                </p>
                                                 
                                            </div>
                                        
                </PortfolioItem>
				<PortfolioItem 
                mainTitle="SALES MANAGEMENT SYSTEM"
                subTitle="Business Analyst, Main Developer"
                from="MAY 2016"
                to="JUL 2016"
                >
             <div>
                                                    <p className="text-muted"></p>
                                                    <h6>About project:</h6>
                                                    <p className="text-muted">
                                                            Track sales and reward points, ROI tracking, KPI tracking<br />
                                                            Sales performance management, SMS marketing<br />
                                                        </p>
                                                        <h6>  Platform &amp; Techniques:</h6>
                                                        <p className="text-muted">.NET MVC, SignalR, Realtime, SMS API. SQL Server, Entity Framework</p>
                                                        <h6>Team with 2 members</h6>
                                                        <h6>  Role &amp; Responsibility</h6>
                                                      <p className="text-muted"> 
                                                           - Business Analyst, Main Developer
                                                            <br /> – Research and support technical team.
                                                            <br /> – Coding review
                                                            <br />  – Solve problems when needed.
                                                            <br /> – Communicating with clients/departments &amp; deriving requirements.
                                                            <br />  – Define business flow.
                                                            <br />  – Investigate current system.
                                                            
                                                    </p>
                                                    
                                                </div>
                
                </PortfolioItem>
				<PortfolioItem className="timeline-inverted"
                mainTitle="UPQUES SOCICAL NETWORKING"                
                subTitle="Business Analyst, Developer"
                from="2015"
                to="2017"
                >
        
		<div >                                                   
                                                <h6>About project:</h6>
                                                <p className="text-muted">
                                                        Social sharing knowledge, Platform quora.com 
                                                        <br />Startup
                                                    </p>
                                                    <h6>  Platform &amp; Techniques:</h6>
                                                    <p className="text-muted">
                                                         C#, .Net Mvc Entity Framework, MongoDB, SignalR, Facebook, Socical API</p>
                                               <h6>Team with 2 members</h6>
                                               <h6>  Role &amp; Responsibility</h6>
                                                  <p className="text-muted">                                                         
                                                        – Define business flow.
                                                        <br />  – Coding Review
                                                        <br />  – Develope      
                                                        <br />  –  Deploy                                             
                                                </p>                                                 
                                            </div>
                                        
                </PortfolioItem>

					<PortfolioItem 
                mainTitle="YERSIN UNIVERSITY WEBSITE CM"
                subTitle="Business Analyst, Main Developer"
                from="MAY 2015"
                to="OTC 2015"
                >
            <div>
                                                    <p className="text-muted"></p>
                                                    <h6>About project:</h6>
                                                    <p className="text-muted">
                                                            Webiste to show activities of Yersin University<br />
                                                            Management news, student information, timesheets &amp; transcript inside university
                                                        </p>
                                                        <h6>  Platform &amp; Techniques:</h6>
                                                        <p className="text-muted">.NET MVC, SignalR, SQL Server, Entity Framework, Angular Js. Jquery</p>
                                                        <h6>Team with 2 members</h6>
                                                        <h6>  Role &amp; Responsibility</h6>
                                                      <p className="text-muted"> 
                                                           - Business Analyst, Main Developer
                                                            <br /> – Research and support technical team.
                                                            <br /> – Coding review
                                                            <br />  – Solve problems when needed.
                                                            <br/>  – Communicating with clients/departments &amp; deriving requirements.
                                                            <br />  – Define business flow.
                                                            <br />  – Investigate current system.
                                                            
                                                    </p>
                                                    
                                                </div>
                
                </PortfolioItem>
				<PortfolioItem className="timeline-inverted"
                mainTitle="STUDENT HOUSING MANAGEMENT SYSTEM"                
                subTitle="Business Analyst, Developer"
                from="MAR 2015"
                to="JUN 2015"
                >
        
		<div  >                                                   
                                                        <h6>About project:</h6>
                                                        <p className="text-muted">
                                                               Build for Dormitory of Dalat University
                                                                <br />Management Student Information, Student finacicals, Student Activities
                                                            </p>
                                                            <h6>  Platform &amp; Techniques:</h6>
                                                            <p className="text-muted">
                                                                 C#, .Net Mvc Entity Framework, SQL Server, Jquery</p>                                                      
                                                       <h6>  Role &amp; Responsibility</h6>
                                                          <p className="text-muted">                                                         
                                                                – Define business flow.
                                                                <br />  – Coding, Coding Review
                                                                <br />  –  Deploy system to clients.                         
                                                        </p>                                                 
                                                    </div>
                                        
                </PortfolioItem>

					<PortfolioItem 
                mainTitle="BID AUCTION SYSTEM"
                subTitle="Business Analyst, Main Developer"
                from="JUL 2014"
                to="OTC 2014"
                >
           <div >
                                                    <p className="text-muted"></p>
                                                    <h6>About project:</h6>
                                                    <p className="text-muted">
                                                            Website Ecommerce, Inculde bid auction                                                            
                                                        </p>
                                                        <h6>  Platform &amp; Techniques:</h6>
                                                        <p className="text-muted">.NET MVC, SignalR, Realtime SQL Server, Entity Framework, Angular Js. Jquery</p>                                                        
                                                        <h6>  Role &amp; Responsibility</h6>
                                                      <p className="text-muted"> 
                                                           - Business Analyst, Main Developer
                                                            <br /> – Research and support technical team.
                                                            <br /> – Coding review
                                                            <br />  – Solve problems when needed.
                                                            <br /> – Communicating with clients/departments &amp; deriving requirements.
                                                            <br />  – Define business flow.                                                            
                                                            <br />  –  Deploy system to clients.                                                        
                                                    </p>
                                                    
                                                </div>
                
                </PortfolioItem>


	<PortfolioItem className="timeline-inverted"
                mainTitle="FIND MORE PROJECTS"                
                subTitle=""
                from="MORE"
                to="PROJECTS"
                >
        
		<div  >                                                   
		<a href="https://github.com/tuanitpro">
               <img src={img1} height="34px" className="img-responsive" alt="" /> <br />
                                                                        /tuanitpro
                                                                    </a>                                               
                                                    </div>
                                        
                </PortfolioItem>

               </ul>
               </Col>
           </Row>
        </section>
        )
    }
}

export default Portfolio