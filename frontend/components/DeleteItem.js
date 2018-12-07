import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { All_ITEMS_QUERY, ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  update = (cache, payload) => {
    // manually update cache on client so it matches server
    // 1. Read cache for items we want (run All_ITEMS_QUERY)
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    // 2. Filter the deleted item out of page.
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    // 3. Put items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this item?")) {
                deleteItem();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
