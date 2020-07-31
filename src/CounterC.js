import React, { Component }  from 'react';

class CounterC extends Component {
     state = {
          count : 0,
     }
     handlePlus = () => {
          console.log('incremnted');
          let newCount =  this.state.count + 1;
          this.setState({
               count: newCount,
          })
     }
     handleMinus = () => {
          console.log('decremented');
          console.log('incremnted');
          let newCount =  this.state.count - 1;
          this.setState({
               count: newCount,
          })
     }
     render() {
          return (
               <div>
                   Count: {this.state.count}
                   <br/>
                   <button onClick = {this.handlePlus}>+</button>
                   <button onClick = {this.handleMinus}>-</button>
               </div>
          )
     }
}

export default CounterC;