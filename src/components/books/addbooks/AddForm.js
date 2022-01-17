import React, { Component } from 'react'
import Label from "../../../layOuts/Label";

export class AddForm extends Component {
    render() {
        const {state, handleChange}=this.props
        return (
            <>
                  <div className="mb-5 me-2 ms-3 pt-5  ps-2">
                  <Label name={"Book Name"} />
                    <input
                      type="text"
                      className="form-control mt-1 input-box "
                      placeholder="Book Name"
                      name="bookName"
                      value={state.bookName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3 me-2 ms-3  ps-2">
                    <Label name={"Author Name"} />
                    <input
                      type="text"
                      className="form-control mt-1 input-box"
                      name="authorName"
                      placeholder=" Author Name"
                      value={state.authorName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-3 me-2 ms-3  ps-2 mt-5">
                  <Label name={"Price"} />
                    <input
                      style={{ fontSize: "20px" }}
                      type="text"
                      className="form-control mt-1 input-box "
                      name="price"
                      placeholder="Enter number "
                      value={state.price}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                
            </>
        )
    }
}

export default AddForm
