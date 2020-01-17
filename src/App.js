import React from 'react';
import styled from 'styled-components'
import MyTable from './MyTable'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 0
        }
    }

    /*
      At work, setting the state in the parent component of the table
      causes the table to lose its state when changing the page index.

      Theory: When onPageChange calls this.setState and triggers the
        re-rendering of this component, ReactTable's
        componentShouldUpdate method is called and probably returns
        false. This may be telling it to stay at the state that it
        was at before? Seems like internal state should still have the
        correct value.
     */

    onPageChange = (pageIndex) => {
        console.log('App.onPageChange -> pageIndex: ' + pageIndex)
        this.setState({pageNumber: pageIndex + 1})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Learn React
                    <p>Page Index: {this.state.pageNumber}</p>
                    <MyTable onPageChange={this.onPageChange}/>
                </header>
            </div>
        );
    }
}

export default App;
