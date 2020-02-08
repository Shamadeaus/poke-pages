import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

function FlexRow({children}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default FlexRow
