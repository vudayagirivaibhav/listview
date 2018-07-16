import React from 'react';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             input : '',
         }
    }

    filterList = e => {
        console.log(e.target.value);
      //  this.props.search(e.target.value);
    }
  
    render() {
        return (
            <div className="search-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search List.."
                    onChange={this.filterList} />
            </div>
        )
    }
}