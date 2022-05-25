import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
        border: 'solid 1px #d8d8d8',
        borderRadius: 0,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    title: {
        minHeight: '37px !important',
        height: 37,
        color: '#323131',
        backgroundColor: '#f2f2f2',
        borderBottom: 'solid 1px #d8d8d8',
    },
});


class ControlledExpansionPanels extends PureComponent {
    static propTypes = {
        expandedPanels: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ])).isRequired,
        handleClick: PropTypes.func.isRequired,
        classes: PropTypes.object,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]).isRequired,
        heading: PropTypes.string,
        secondaryHeading: PropTypes.string,
        panelName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    };

    handleChange = () => {
        const { handleClick, panelName } = this.props;
        handleClick(panelName);
    };

    render() {
        const { classes, expandedPanels, heading, secondaryHeading, children, panelName } = this.props;

        return (
            <div className={classes.root}>
                <ExpansionPanel
                    classes={{ expanded: classes.expanded }}
                    expanded={expandedPanels.includes(panelName)}
                    onChange={this.handleChange}
                >
                    <ExpansionPanelSummary className={classes.title} expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{heading}</Typography>
                        <Typography className={classes.secondaryHeading}>{secondaryHeading}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {children}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(styles)(ControlledExpansionPanels);
