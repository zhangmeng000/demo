import React, { PropTypes } from 'react';
import{ searchGit} from './utils/helpers'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    searchGit()
    .then((data)=>{
      this.setState({
        data:data.data,
        wait:false
      })
    })
  }
  render () {
    return(
      <div>
        <h1>{this.state.data.name}</h1>
        <img src={this.state.data.avatar_url} />
      </div>
    )
  }
}

export default About;
