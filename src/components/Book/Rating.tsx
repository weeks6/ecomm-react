import React from 'react'

type Props = {
    rating: number
}

function Rating({rating}: Props ) {
    return (
        <div>
            {rating}/5
        </div>
    )
}

export default Rating
