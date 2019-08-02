import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Leftbar from '../layout/Leftbar';
import {
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

 class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: [],
            Doctor_Name : ''

        };
    }
    

    componentDidMount() {
        const apiUrl = 'https://rrcgvir.com/register/Register/alldoctors/';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    })
                    console.log(result)
                },
                (error) => {
                    this.setState({ error })
                }
            )
    }
    

    render() {
        if(localStorage.getItem("id") != null)
        {
        const { error, products } = this.state;
        if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        }
        else {
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
                                            <li className="breadcrumb-item active">Manage Doctor</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="container mt-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-box table-responsive">
                                                <h4 className="m-t-0  text-center"><h2>Doctors</h2></h4>
                                                <table id="datatable" className="table table-bordered" cellspacing="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>NAME</th>
                                                            <th>EMAIL</th>
                                                            <th>CONTACT</th>
                                                            <th>MR</th>
                                                            <th>ACTION</th>
                                                        </tr>
                                                    </thead>


                                                    <tbody>
                                                        {products.map(item => (
                                                            <tr>
                                                                <td>{item.id}</td>
                                                                <td><a className="doctor-link" href={"/doctor/track/"+item.id}>{item.name}</a></td>
                                                                <td>{item.email}</td>
                                                                <td>{item.contact}</td>
                                                                <td>{item.mrname}</td>
                                                                <td><a href={item.id} ><button className="btn btn-info">View</button></a><a href={"/doctor/delete/"+item.id}><button className="btn btn-danger">Delete</button></a></td>
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
    }
        else {
            return (<React.Fragment>
                <Redirect to="/" />
            </React.Fragment>)
        }
    }
}
export default ManageDoctor;