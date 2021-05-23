import React from "react";

import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams<{ id: string | undefined }>();

  return <div>{id}</div>;
}

export default Book;
