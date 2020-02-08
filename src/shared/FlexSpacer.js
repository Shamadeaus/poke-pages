import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

function FlexSpacer() {
    const classes = useStyles()

    return (
        <span className={classes.root}/>
    )
}

const useStyles = makeStyles({
    root: {
        flex: 1
    }
})

export default FlexSpacer
