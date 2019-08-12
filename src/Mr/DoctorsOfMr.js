import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Leftbar from '../layout/Leftbar';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

 class DoctorsOfMr extends Component {
     constructor(props) {
         super(props);
         this.state = {
             error: null,
             products: [],
             MrId: this.props.match.params.id,
             DoctorName: '',
             MrName:''
         };
     }
     componentDidMount() {
         let data = {
             getMrId: this.state.MrId
         };
         const apiUrl = 'https://35.154.116.123/sunpharma/register/alldoctorsofmr/';
         const myheader = new Headers();
         myheader.append('Content-Type', 'application/json');
         const options = {
             method: 'POST',
             body: JSON.stringify(data),
             myheader
         };
         fetch(apiUrl, options)
             .then(res => res.json())
             .then(
                 (result) => {
                     this.setState({
                         products: result.data,
                         MrName:result.MrName
                     })
                     //console.log(result)
                 },
                 (error) => {
                     this.setState({ error })
                 }
             )
     }
  render() {
      if (localStorage.getItem("id") != null)
      {
          const { products } = this.state;
          return (
              <React.Fragment>
                  <div id="wrapper" class="enlarged forced">
                      <Header />
                      <div className="left side-menu">
                          <Leftbar />
                      </div>

                      <div className="content-page">
                          <div className="content">
                              <div className="row">
                                  <div className="col-sm-12">

                                      <h4 className="page-title">Welcome {localStorage.getItem("name")}</h4>
                                      <ol className="breadcrumb">
                                          <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                          <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                          <li className="breadcrumb-item active">Manage Marketing Representative</li>
                                      </ol>

                                  </div>
                              </div>

                              <div className="container mt-5">
                                  <hr />
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="card-box table-responsive react-data-table-component">
                                              <h2 className="m-t-0  text-center text-warning">Doctors of {this.state.MrName}</h2>
                                              <table id="datatable" class="table table-bordered">
                                                  <thead>
                                                      <tr>
                                                          <th>NAME</th>
                                                          <th>EMAIL</th>
                                                          <th>CONTACT</th>
                                                      </tr>
                                                  </thead>


                                                  <tbody>
                                                      {products.map(item => (
                                                          <tr>
                                                              <td><a className="doctor-link" href={"/doctor/track/" + item.id}>{"Dr. " + item.name}</a></td>
                                                              <td>{item.email}</td>
                                                              <td>{item.contact}</td>
                                                          </tr>
                                                      ))}
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <Footer />
                      </div>
                  </div>
              </React.Fragment>
          )
      }
      else
      {
          return (<React.Fragment>
              <Redirect to="/" />
          </React.Fragment>)
      }
  }
}

export default DoctorsOfMr;