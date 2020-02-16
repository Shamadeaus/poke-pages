import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        padding: '8px'
    }
})

function StandardCard({children}) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            {children}
        </Card>
    )
}

export default StandardCard
