import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import styles from './styles';
import {
    IconButtonClose,
    Button,
    ButtonOutlinedSecondary,
    ButtonContained,
    ButtonText,
} from 'cx-ui-components'
import Edit from '@material-ui/icons/Edit';

class Buttons extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>ButtonText</h3>
                    <ButtonText
                        icon={<Edit />}
                        onClick={() => null}
                    >
                        Edit
                    </ButtonText>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>IconButtonClose</h3>
                    <IconButtonClose
                        onClick={() => null}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>CreateFab</h3>
                    <CreateFab
                        onClick={() => null}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>Button</h3>
                    <h5>size="small"</h5>
                    <Button
                        size="small"
                        onClick={() => null}
                    >
                        Button
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="medium" <i>(default)</i></h5>
                    <Button
                        onClick={() => null}
                    >
                        Button
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="large"</h5>
                    <Button
                        size="large"
                        onClick={() => null}
                    >
                        Button
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                <Divider />
            </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>ButtonOutlinedSecondary</h3>
                    <h5>size="small"</h5>
                    <ButtonOutlinedSecondary
                        size="small"
                        onClick={() => null}
                    >
                        Button
                    </ButtonOutlinedSecondary>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="medium" <i>(default)</i></h5>
                    <ButtonOutlinedSecondary
                        onClick={() => null}
                    >
                        Button
                    </ButtonOutlinedSecondary>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="large"</h5>
                    <ButtonOutlinedSecondary
                        size="large"
                        onClick={() => null}
                    >
                        Button
                    </ButtonOutlinedSecondary>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>




                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>ButtonContained</h3>
                    <h5>size="small"</h5>
                    <ButtonContained
                        size="small"
                        onClick={() => null}
                    >
                        Button
                    </ButtonContained>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="medium" <i>(default)</i></h5>
                    <ButtonContained
                        onClick={() => null}
                    >
                        Button
                    </ButtonContained>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>fullWidth</h5>
                    <ButtonContained
                        onClick={() => null}
                        fullWidth
                    >
                        Button
                    </ButtonContained>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h5>size="large"</h5>
                    <ButtonContained
                        size="large"
                        onClick={() => null}
                    >
                        Button
                    </ButtonContained>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Buttons);
