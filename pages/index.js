import React, { Component } from "react";
import Router from "next/router";
import $ from 'jquery'
import ScoreCache from '../common/ScoreCache'

export default class Index extends Component {
  componentDidMount = () => {
    // $(function() {
      ScoreCache.init((err, ret) => {
          console.log("index.js -> cache init", err, ret);
          if(err) {
              $.error('cache init: error');
              return;
          }
      // })          
    })
    Router.push("/home")
  };

  render() {
    return <div />;
  }
}
