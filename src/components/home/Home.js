import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  componentDidMount(){
    setInterval(this.refresh,10000)
  }
  componentWillUnmount(){
    this.refresh();
  }
  refresh = () =>{
    window.location.reload();
  }
    render() {
      return (
        <div id="containerHome" className="container">
          <div className="content">
              <h3> Welcome to books world...</h3>
              <p><a href="https://github.com/KChandrikaDev" target="_blank" ><i class="fa fa-github  fa-2x text-white" aria-hidden="true"></i></a>
              <a className="ms-2" href="https://www.linkedin.com/in/chandrika-reddy/" target="_blank"><i class="fa fa-linkedin-square fa-2x text-white" aria-hidden="true"></i></a>
              </p>
              
          </div>
         
    
        </div>
        )
    }
}
