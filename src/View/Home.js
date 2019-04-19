import React, { Component } from 'react';
import NavBar from '../Components/Navbar';
import { withRouter } from "react-router-dom";
import ToolBar from '../Components/ToolBar';
import Logo from '../mt_logo.png';
class Home extends Component {

  constructor() {
    super();
    this.title = "Module Tracker";
    this.classStudent = "isActive";
    this.classTrainer = "isNotActive";
    this.classModule = "isNotActive";
  }

  redirectToStudent = (path) => {
    this.props.history.push(path);
    if (this.classStudent === "isNotActive") {
      this.classStudent = "isActive";
      this.classTrainer = "isNotActive";
      this.classModule = "isNotActive";
    }
  }

  redirectToTrainer = (path) => {
    this.props.history.push(path);
    if (this.classTrainer === "isNotActive") {
      this.classTrainer = "isActive";
      this.classStudent = "isNotActive";
      this.classModule = "isNotActive";
    }
  }

  redirectToModule = (path) => {
    this.props.history.push(path);
    if (this.classModule === "isNotActive") {
      this.classModule = "isActive";
      this.classTrainer = "isNotActive";
      this.classStudent = "isNotActive";
    }
  }

  render() {
    const actions = [
      {
        text: "Register student",
        onClick: () => this.redirectToStudent('/Student'),
        isActive: this.classStudent
      },
      {
        text: "Register trainer",
        onClick: () => this.redirectToTrainer('/Trainer'),
        isActive: this.classTrainer
      },
      {
        text: "Register module",
        onClick: () => this.redirectToModule('/Module'),
        isActive: this.classModule
      },
    ]
    return (
      <div>
        <ToolBar srcLogoImage={Logo} nameAvatar="Juan Perez" sizeAvatar='50px'></ToolBar>
        <NavBar actions={actions} title={this.title}></NavBar>
      </div>
    );
  }
}

export default withRouter(Home);
