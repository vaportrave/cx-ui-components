import React, { Component } from 'react';
import { withCxTheme } from 'cx-ui-components';
import Filter from './examples/Filter';
import Inputs from './examples/Inputs';
import Buttons from './examples/Buttons';
import Common from './examples/Common';
import Forms from './examples/Forms';
import 'cx-ui-components/src/assets/fonts.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Cx ui-components</h1>
                <Inputs />
                <Buttons />
                <Forms />
                <Filter />
                <Common />
            </div>
        );
    }
}

export default withCxTheme(App);
