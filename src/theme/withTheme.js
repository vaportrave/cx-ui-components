import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './cx-theme';


function withTheme(Component) {
    function WithTheme(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithTheme;
}

export default withTheme;
