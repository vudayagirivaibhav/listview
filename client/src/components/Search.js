import React from 'react';
import PropTypes from 'prop-types';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    filterList = e => {
        console.log(e.target.value);
        this.props.search(e.target.value, 1);
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

Search.propTypes = {
    filterList: PropTypes.func,
};

