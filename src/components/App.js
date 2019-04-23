import React, { Component } from "react";
import List from "./List";
import Modal from "./Modal";
import { getRunningTotal } from "../utils";

class App extends Component {
  state = {
    item: {},
    list: [],
    runningTotal: 0,
    isOpen: false
  };

  isValid = () => {
    // all three props must be defined to enable the add button
    return (
      this.state.item.description &&
      this.state.item.cost &&
      this.state.item.quantity
    );
  };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    // on modal close set isOpen to false and reset the item object
    this.setState({ isOpen: false }, () => this.setState({ item: {} }));
  };

  handleOnChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    });
  };

  getRunningTotal = () => {
    let runningTotal = getRunningTotal(this.state.list);

    // update state and close modal
    this.setState({ runningTotal }, this.onClose);
  };

  handleOnClick = () => {
    let item = { ...this.state.item };

    item.total = item.cost * item.quantity || 0;
    // update state and get running total
    this.setState({ list: [...this.state.list, item] }, this.getRunningTotal);
  };

  escFunction = e => {
    // close the modal when the user press ESC
    if (this.state.isOpen && e.keyCode === 27) {
      this.onClose();
    }
  };

  componentDidMount() {
    // add event listener to be able to close de modal with ESC key
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    // remove event listener
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className="container">
        <div
          className="row pt-5 pb-5"
          style={{ borderBottom: "1px solid #DFE1E6" }}
        >
          <Modal
            isOpen={this.state.isOpen}
            onOpen={this.onOpen}
            onClose={this.onClose}
            triggerText={"Submit expense"}
          >
            <div className="col-sm-12">
              <form autoComplete="off">
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Description"
                    type="text"
                    value={this.state.item.description || ""}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cost">Cost</label>
                  <input
                    className="form-control"
                    id="cost"
                    name="cost"
                    placeholder="Cost"
                    type="number"
                    step=".01"
                    value={this.state.item.cost || ""}
                    onChange={e => {
                      if (e.target.validity.valid) {
                        this.handleOnChange(e);
                      }
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    type="number"
                    step=".01"
                    value={this.state.item.quantity || ""}
                    onChange={e => {
                      if (e.target.validity.valid) {
                        this.handleOnChange(e);
                      }
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="total">Total</label>
                  <input
                    className="form-control"
                    readOnly
                    id="total"
                    name="total"
                    value={this.state.item.cost * this.state.item.quantity || 0}
                  />
                </div>
                <button
                  className="btn btn-primary col-sm-12"
                  disabled={!this.isValid()}
                  onClick={e => {
                    e.preventDefault();
                    this.handleOnClick();
                  }}
                >
                  Add
                </button>
              </form>
            </div>
          </Modal>
        </div>
        {this.state.list.length > 0 && (
          <div className="row pt-3">
            <div className="col-sm-9">
              <table
                className="table table-bordered table-hover"
                style={{ background: "#fff" }}
              >
                <thead>
                  <tr>
                    <th>Description</th>
                    <th className="text-center">Cost</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <List list={this.state.list} />
                </tbody>
              </table>
            </div>
            <div className="col-sm-3 text-center">
              <h1>{this.state.runningTotal}</h1>
              <small className="text-muted">Running Total</small>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
