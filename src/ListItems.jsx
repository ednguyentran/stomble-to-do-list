import React from "react";
import { Grid } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((items) => {
    /* This returns and creates the input as website elements */
    return (
      <Grid key={items.key} container>
        <Grid item xs={1}>
          <Checkbox color="primary" />
        </Grid>
        <Grid item xs={9}>
          <p style={{ position: "relative", bottom: 5 }}>{items.value}</p>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            style={{ color: "#3F51B5" }}
            onClick={() => props.deleteItem(items.key)}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
