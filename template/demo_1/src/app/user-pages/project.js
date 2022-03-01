import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { Form } from 'react-bootstrap';
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {


  render () {
    return (
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Create New Project</h4>
            <p className="card-description"> Enter details </p>
            <form className="forms-sample">
              <Form.Group>
                <label htmlFor="exampleInputName1">Name</label>
                <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputEmail3">Email address</label>
                <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleStudentid">Student Id</label>
                <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Student id should be 8 digit" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputCity1">Group Id</label>
                <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Group Id" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleSelectGender">Status</label>
                <select className="form-control" id="exampleSelectGender">
                  <option>Completed</option>
                  <option>Ongoing</option>
                </select>
              </Form.Group>
              <Form.Group>
                <label>File upload</label>
                <div className="custom-file">
                  <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                  <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                </div>
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleDomain">Domain</label>
                <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Eg. Machine learning, Cybersecurity" />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleTextarea1">Description</label>
                <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
              </Form.Group>
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <button className="btn btn-dark">Cancel</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
