import React from 'react'

function BodyStyles({theme}) {
    return (
        <style>
            {
                `
                    body {
                        background-color: ${theme.palette.background.default};
                        margin: 0;
                        padding: 0;
                    }
                `
            }
        </style>
    )
}

export default BodyStyles
