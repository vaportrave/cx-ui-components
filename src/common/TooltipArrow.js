import React from 'react';
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: theme.palette.grey[400]
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    border: '1px solid rgba(0, 0, 0, 0.87)',
    fontFamily: 'HKNova',
    fontWeight: 400,
  }
}))

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />
}

export default BootstrapTooltip
