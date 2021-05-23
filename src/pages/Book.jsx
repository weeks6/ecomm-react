import React from 'react'

import { useParams } from "react-router-dom";

function Book() {

  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default Book
