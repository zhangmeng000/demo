import React, { PropTypes } from 'react'

import { hashHistory } from 'react-router';

class Home extends React.Component {
  handleClick(){
    hashHistory.push('work');
  }
  render () {
    return(
      <div className="jumbotron">
        <h1>欢迎光临</h1>
<<<<<<< HEAD
        <p>here is 张盟 的 Concer</p>
=======
        <p>here is zhangmeng 的 Concer</p>
>>>>>>> c0f6c91cf830415e1093d488b57393ff94955a44
        <p><a className="btn btn-primary btn-lg" role="button" onClick={this.handleClick.bind(this)}>我的工作</a></p>
      </div>
    )
  }
}

export default Home;
