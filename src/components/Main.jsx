import React, { Component } from "react";
import { shoesApi, fetchShoes } from "../Api/api";
import ShoeCard from "./ShoeCard";
import ControlPanel from "./ControlPanel";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Main.css";
export default class Main extends Component {
  state = {
    shoes: [],
    isLoading: false,
    editing: null,
    isCreating: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await shoesApi.get();
    this.setState({ shoes: data.data, isLoading: false });
  }
  handleEdit = (obj) => {
    this.setState({ editing: obj, isCreating: false });
  };
  setCreate = () => {
    this.setState({ isCreating: true, editing: null });
  };
  handleUpdate = async (obj) => {
    try {
      this.setState({ isLoading: true });
      await shoesApi.put(`/${obj.id}`, obj);
      const data = await fetchShoes();
      this.setState({ shoes: data.data, isLoading: false, editing: null });
    } catch (e) {
      console.log(e.message);
    }
  };
  handleCreate = async (obj) => {
    try {
      this.setState({ isLoading: true });
      await shoesApi.post("", obj);
      const data = await fetchShoes();
      this.setState({
        shoes: data.data,
        isLoading: false,
        editing: null,
        isCreating: false,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  handleDelete = async (obj) => {
    // const filteredArr = this.state.shoes.filter((shoe) => shoe.id !== obj.id);
    try {
      this.setState({ isLoading: true });
      await shoesApi.delete(`/${obj.id}`);
      const data = await fetchShoes();
      this.setState({ shoes: data.data, isLoading: false });
    } catch (e) {
      console.log(e.message);
    }
  };
  renderShoes() {
    return this.state.shoes.map((shoe, i) => {
      return (
        <ShoeCard
          key={shoe.id}
          shoe={shoe}
          i={i}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          isLoading={this.state.isLoading}
        />
      );
    });
  }
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div className="main">
            <div className="shoes-container">{this.renderShoes()}</div>
            <ControlPanel
              setCreate={this.setCreate}
              onCreate={this.handleCreate}
              onSubmit={this.handleUpdate}
              isCreating={this.state.isCreating}
              editing={this.state.editing}
            />
          </div>
        ) : (
          <div className="center">
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              visible={"true"}
            />
          </div>
        )}
      </>
    );
  }
}
