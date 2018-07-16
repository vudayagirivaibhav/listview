import React from 'react'


export default class AlphabetList extends React.Component {
    constructor(props){
        super(props);
        this.alpha = [
        'a','b','c','d','e','f','g', 'h', 'i', 'j', 'k','l', 'm',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
      ]
      this.selectAlphabet = this.selectAlphabet.bind(this);
    }

    selectAlphabet(letter){
        console.log(letter);
        this.props.selectAlphabet(letter);
    }

    render(){
        let alphabets = this.alpha.map((a,index) =>(
            <p className="alphabet-link" key={index} onClick={() => this.selectAlphabet(a)}>{a}</p>
        ));
        return (
            <div className="alphabet-list">
                 {alphabets}
            </div>
        )
    }
}

