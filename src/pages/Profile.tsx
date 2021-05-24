import React from "react";
import { useAuth } from "../store/store";

function Profile() {
  const { user } = useAuth();

  return <div>{user?.email}</div>;
}

export default Profile;
