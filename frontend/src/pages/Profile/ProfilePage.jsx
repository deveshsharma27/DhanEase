import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ProfilePage(){
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Age:</strong> {user?.age || "-"}</p>
        <p><strong>Monthly Income:</strong> ₹{user?.income || 0}</p>
      </div>
    </div>
  );
}
