import React, {useState, useCallback, useMemo} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVert from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'

function OverflowMenu({className, children, color = 'inherit'}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback(event => {
        setAnchorEl(event.currentTarget)
    }, [])

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const menuItems = useMemo(() => {
        return React.Children.map(children, child => {
            const onClick = () => {
                handleClose()
                child.props.onClick()
            }
            return React.cloneElement(child, {onClick})
        })
    }, [children, handleClose])

    return (
        <>
            <IconButton className={className} color={color} aria-controls="overflow-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVert/>
            </IconButton>
            <Menu
                id="overflow-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
            >
                {menuItems}
            </Menu>
        </>
    )
}

export default OverflowMenu
