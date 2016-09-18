import React, { PropTypes } from 'react';
import { searchGit} from './utils/helpers'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'username'
    }
  }
  handleInput(e){
    let value = e.target.value;
    this.setState({
      inputValue:value
    })
  }
  componentDidMount(){

  }
  handleClick(){
    let name = this.state.inputValue;
    searchGit(name)
    .then( (recData) => {
      console.log(recData)
      this.setState({
        data:recData.getData,
        wait:false
      })
    })
  }
  render () {
    let styles = {
      input:{marginLeft:'100px'},
    }
    let gitInfo = (
      <div style={styles.root}>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        <input style = {styles.input} type = 'text' value = {this.state.inputValue} onChange={this.handleInput.bind(this)} />
        <button onClick = {this.handleClick.bind(this)}>搜索</button><br />
        {this.state.wait ? '稍等' : gitInfo}
      </div>
    )
  }
}

export default About;
