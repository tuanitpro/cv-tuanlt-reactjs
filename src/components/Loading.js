import React, {
    Component
}
from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                isLoading: false
            })
        }, 3000)      
    }    

    render (){
        if(this.state.isLoading){
            return(
                <div id="loader">
                <div id="loaderInner">
                  <div className ="loaderBars">
                    <span className ="bar1 bar"></span>
                    <span className ="bar2 bar"></span>
                    <span className="bar3 bar"></span>
                  </div>	
                </div>
              </div>
            )
        }
        else{
            return ('');
        }
    }
}
export default Loading;