import React, { Component } from 'react'

export class Thead extends Component {
    render() {
        return (
            <>
            <thead>
                <tr>
                  <th data-label="Book Name" scope="col">
                    Book Name
                  </th>
                  <th
                    style={{ textAlign: "right" }}
                    className="book-name"
                    data-label="Author Name"
                    scope="col"
                  >
                    Author Name
                  </th>
                  <th
                    data-label="Price"
                    style={{ textAlign: "right" }}
                    scope="col p-3"
                    className="book-name"
                  >
                    Price
                  </th>

                  <th
                    data-label="Actions"
                    style={{ textAlign: "right" }}
                    scope="col ps-3"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
            </>
        )
    }
}

export default Thead
