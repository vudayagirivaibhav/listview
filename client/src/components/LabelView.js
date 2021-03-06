import React from 'react'

export default class LabelView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || [],
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }

    render() {
        let labels = this.state.data
            .map((label, i) => (
                <tr className="label" key={i}>
                    <td> {label.Labels} </td>
                </tr>
            ));
        return (
            <table className="label-container">
                <tbody>
                    <tr>
                        <th>Label</th>
                    </tr>
                    {labels}
                </tbody>
            </table>
        )
    };
}