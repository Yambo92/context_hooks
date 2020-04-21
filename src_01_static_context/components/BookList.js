import {ThemeContext} from '../contexts/ThemeContext'
import React, { Component } from 'react'

export default class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, dark, light} = this.context ;
        const theme = isLightTheme ? light : dark; 
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>the way of kings</li>
                    <li style={{ background: theme.ui}}>the name of the wind</li>
                    <li style={{ background: theme.ui}}>the end</li>
                </ul>
            </div>
        )
    }
}
