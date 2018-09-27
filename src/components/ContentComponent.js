import React from 'react';
import Fetch from 'react-fetch';

class Content extends React.Component{
  render(){
    return (
        <div className="content">
            <h1>{this.props.Item ? this.props.Item.headline.S : ''}</h1>

            <p dangerouslySetInnerHTML={{__html: this.props.Item ? this.props.Item.document.S.replace('\n', '<br />') : ''}}></p>
        </div>
    )
  }
}

export default class ContentComponent extends React.Component{
  render(){
    return (
        <Fetch url={"https://94omh50edg.execute-api.eu-central-1.amazonaws.com/yogalates?page=" + this.props.match.params.contentId}>
          <Content/>
        </Fetch>
    )
  }
}
