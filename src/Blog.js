import React, { PropTypes } from 'react'
import { searchMd } from './utils/helpers';
import marked from 'marked';
import highlight from 'highlight.js'
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:``,
      wait:true,
    }
  }
  componentDidMount(){
    let add = this.props.params.title;
    searchMd(add)
    .then( (recData) => {
      this.setState({
        data:recData.getMd,
        wait:false
      })

    })
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });
    let content = this.state.wait ? '请稍等' : marked(this.state.data);
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} className = 'post-content'/>
      </div>
    )
  }
}

export default Blog;
