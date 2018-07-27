import React, {Component} from 'react'

class PortfolioItem extends Component{
render(){
    const {className, mainTitle, subTitle, from, to, children } = this.props;
    return(
        <li className={className}>
            	<div className="timeline-image">
						<h4>{from}
                                        
							<br />-
                                        
								<br />{to}
                                    
								 
							</h4>
            </div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4>{mainTitle}</h4>
									<h4 className="subheading">{subTitle}</h4>
								</div>
								<div className="timeline-body">
                                {children}
									
								</div>
							</div>
        </li>
    )
}
}
export default PortfolioItem