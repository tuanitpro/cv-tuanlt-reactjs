import React, {
    Component
} from 'react';
 
import { Container, Row, Col } from 'reactstrap';
class HireMe extends Component {
    render(){
        return(
            
               
                <section id="here-me">
        <Container>
        <div className="text-center">
            <Row>
           
  					<Col md="9">
					    <h1>"I Am Available for New Work"</h1>
  					</Col>
  					<Col md="3">
					    <button className="page-scroll btn btn-x3" >Hire Me</button>
  					</Col>
		
            </Row>
            </div>
            </Container>
    </section>
             
            
        
        )
    }
}
export default HireMe;