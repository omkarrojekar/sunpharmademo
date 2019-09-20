import React, { Component } from 'react';
import  axios from 'axios';
import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

 class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
        }
    }
     componentDidMount() {
         //axios.get(`http://192.168.0.4/register/register/Register/alldoctors/`)
         axios.get(`http://192.168.0.4/register/register/alldoctors/`)
         .then(( res ) =>{
             console.log(res)
            this.setState({values:res.data})
         })
     }
    



   



    render() {
            return (
                <React.Fragment>
                    <ul classNametext="text text-center">{this.state.values.map(item => <li className="text-primary">{item.name}</li>)}</ul>
                </React.Fragment>
            )
    }
}
export default Demo;