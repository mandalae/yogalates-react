import React from 'react';
import Fetch from 'react-fetch';

class Content extends React.Component{
  render(){
    return <span>{this.props.Item ? this.props.Item.headline.S : ''}</span>
  }
}

export default class ContentComponent extends React.Component{
  render(){
    return (
        <Fetch url="https://94omh50edg.execute-api.eu-central-1.amazonaws.com/yogalates?page=forside">
          <Content/>
        </Fetch>
    )
  }
}
