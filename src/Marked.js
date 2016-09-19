import React, { PropTypes } from 'react'
import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class Marked extends React.Component {
  render () {
    let cont = marked('# hello')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: marked('# hello')}} />
      </div>
    )
  }
}

export default Marked;
