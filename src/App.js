import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";
import { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ListItems from "./ListItems.jsx";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

// Converted to class to monitor state
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        key: "",
        value: "",
      },
    };
    // Explicitly bind to class as it does not bind automatically.
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // This method collects the input and sets a unique ID.
  handleInput(e) {
    this.setState({
      currentItem: {
        key: Date.now(),
        value: e.target.value,
      },
    });
  }

  // This method adds the new item to the array and clears text from input box.
  addItem(e) {
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          key: "",
          value: "",
        },
      });
      console.log(items);
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((items) => items.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <Grid direction="column" container>
        {/* This will contain the navigation bar. */}
        <Grid item>
          <Header />
          <br />
        </Grid>
        {/* This will contain the main content. */}
        <Grid item container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Paper elevation={3}>
              <br />
              <Typography
                variant="h5"
                align="center"
                style={{ color: "#3F51B5" }}
              >
                {" "}
                My Checklist
              </Typography>
              <br />
              {/* Passes data through the base class */}
              <ListItems
                items={this.state.items}
                deleteItem={this.deleteItem}
              ></ListItems>
            </Paper>
            {/* This is used to obtain new entries. */}
            <TextField
              type="text"
              fullWidth
              id="outlined-basic"
              label="New Checklist Item"
              variant="outlined"
              style={{ marginTop: "10px" }}
              value={this.state.currentItem.value}
              onChange={this.handleInput}
            ></TextField>
            {/* This is used to register clicks. */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!this.state.currentItem.value}
              style={{ marginTop: "10px" }}
              onClick={() => this.addItem()}
            >
              Add to List
            </Button>
          </Grid>
          <Grid item xs={1} sm={2} />
          {/* NOTE: This needs to be cleaned up 
          <p>{this.state.items.text}</p> */}
        </Grid>
      </Grid>
    );
  }
}

export default App;
