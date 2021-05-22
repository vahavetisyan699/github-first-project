import React, { Component } from 'react'
import context from './Context'

export default class List extends Component {
    render() {
        return (
            <context.Consumer>
                {
                    (value)=>(
                        <div>
                            <h4 style={{color:value}}> Tng tng </h4>
                            <ul>
                                {
                                    this.props.listLi.map((el, i) =>{
                                        return (i+1 + '.' + el + "," + " ")
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </context.Consumer>
        )
    }
}
