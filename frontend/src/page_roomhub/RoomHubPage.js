import React, { Component } from "react";
import {withRouter} from "../tools/WithRouter";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import GroupService from "../services/group.service";

import FFooter from "../components/FFooter.js";
import FHeader from "../components/FHeader";

function requiredValidationTest(value)
{
  return((value) ? undefined : 
    (<div className="rgb-alert" role="alert">This field is required!</div>));
}

function roomIdValidationTest(value)
{
  let result = undefined;
  if (value.length !== 6)
  {
    result = <div className="rgb-alert mb-2" role="alert">id is not the correct length</div>;
  }
  return(result);
}

class RoomHub extends Component {
  
  constructor(props) 
  {
    super(props);
    this.buttonSetStateRoomId = this.buttonSetStateRoomId.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.state = 
      {
        roomId: "",
        loading: false,
        message: "",
      }
  }   

  buttonSetStateRoomId(button)
  {
    this.setState({roomId: button.target.value}) ;
  }

  createRoom(form)
  {
    // [ ] send request for new room
    // [ ] get back id for new room
    // [ ] go to room
    form.preventDefault();
    this.setState({message: "", loading: true})
    this.formCreate.validateAll();
    if (this.checkBtnCreate.context._errors.length === 0) 
    {
      GroupService.createGroup().then(
        (data) => 
        {
          console.log(data.group_id);
          this.setState({loading: false});
          this.props.navigate("/room/" + data.group_id);
          window.location.reload();
        },
        (error) => 
        {
          this.setState({loading: false});
        }
      );
    }
    else 
    {
      console.log("error");
      this.setState({loading: false});
    }
  }

  joinRoom(form)
  {
    form.preventDefault();
    this.setState({message: "", loading: true})
    this.formJoin.validateAll();
    if (this.checkBtnJoin.context._errors.length === 0)
    {
      this.setState({loading: false});
      GroupService.joinGroup(this.state.roomId).then(
        (data) => {
          this.setState({loading: false});
          this.props.navigate("/room/" + data.group_id);
          window.location.reload();
        },
        (error) => {
          console.log("error");
          this.setState({loading: false});
        }
      );
    }
    else 
    {
      this.setState({loading: false});
    }
  }

  render() {
    return (
<div className="h-100 d-flex flex-column m-3 m-xxl-0">
  <FHeader/>
  <main className="mb-5 container-fluid">
    <div className="my-5 d-lg-flex justify-content-around align-items-center">
      <div className="col-lg-7 mx-md-5 mb-5" >
        <p className="ffs-1 ffw-2 m-0 p-0 me-4">Rooms</p>
        <hr/> 
          <p className="ffw-3 rgb-1 ffs-3 mb-3">Join a room with your friends to find movies you all like!</p>
          <Form onSubmit={this.joinRoom} ref={form => this.formJoin = form} className="d-sm-flex mb-4 ">
            <Input type="text" name="room-id" className="FFormInput"
              value={this.state.roomId} onChange={this.buttonSetStateRoomId} validations={[requiredValidationTest, roomIdValidationTest]}/>
            <div className="form-group">
              <button disabled={this.state.loading} className="btn btn-primary ms-sm-3 mt-3 mt-md-0">
                  {this.state.loading && <span className="spinner-border spinner-border-sm"/>}
                  {!this.state.loading && <span>Join Room</span>}
              </button>
            </div>
            <CheckButton style={{ display: "none" }} ref={c => { this.checkBtnJoin = c; }} />
          </Form>
          <Form onSubmit={this.createRoom} ref={form => this.formCreate = form} className="mb-4">
            <div className="form-group">
              <button className="btn btn-primary" disabled={this.state.loading} >
                  {this.state.loading && <span className="spinner-border spinner-border-sm"/>}
                  {!this.state.loading && <span>Create Room</span>}
              </button>
            </div>
            <CheckButton style={{ display: "none" }} ref={c => { this.checkBtnCreate = c; }} />
          </Form>
      </div>
    </div>
  </main>
  <FFooter/>
</div>
        );
    }
}

export default withRouter(RoomHub);
