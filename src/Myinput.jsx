import React, { Component } from 'react'
import styles from './Myinput.module.css'


export default class Myinput extends Component {
    constructor(props){
        super(props)

        this.state = {
            cv: ""
        }

        this.inputChange = this.inputChange.bind( this )
    }

    inputChange( e ) {
        this.setState({cv: e.target.value})
    }

    render() {
        const { label, type } = this.props

        return (
            <>
                <div className = { styles.form } >
                    <label> { label }</label>    
                    <input type={type} value={this.state.cv} onInput={this.inputChange} />
                </div>  
            </>
        )
    }
}
