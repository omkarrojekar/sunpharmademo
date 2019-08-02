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
         //axios.get(`http://192.168.0.3/register/Register/alldoctors/`)
         axios.get(`http://192.168.0.3/register/Register/alldoctors/`)
         .then(( res ) =>{
             console.log(res)
            this.setState({values:res.data})
         })
     }
    



   



    render() {
        if (localStorage.getItem("id") != null) {
            return (
                <React.Fragment>
                    <ul classNametext="text text-center">{this.state.values.map(item => <li className="text-primary">{item.name}</li>)}</ul>
                </React.Fragment>
            )
        }
        else {
            return (<React.Fragment>
                <Redirect to="/" />
            </React.Fragment>)
        }
    }
}
export default Demo;