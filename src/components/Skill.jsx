import React, {Component} from 'react'
import CircularProgressbar from 'react-circular-progressbar';


class Skill extends Component{
    
    render(){
        const {percentage} = this.props;
        return(
            
            <div style={{height:152, width: 152}} >
               <CircularProgressbar
  percentage={percentage}
  text={`${percentage}%`}
  strokeWidth={10}
  initialAnimation={true}
  counterClockwise={true}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the part that's "complete"
    path: {
      // Tweak path color:
      stroke: '#13B0A5',
      // Tweak path to use flat or rounded ends:
      strokeLinecap: 'butt',
      // Tweak transition animation:
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the circle behind the path
    trail: {
      // Tweak the trail color:
      stroke: '#d6d6d6',
    },
    // Customize the text
    text: {
      // Tweak text color:
      fill: '#474d5d',
      // Tweak text size:
      fontSize: '21px',
    }}
    }
/>
                 </div>
        )
    }
}
export default Skill;