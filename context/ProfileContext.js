import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileInfo, setProfileInfo] = useState({
    name: "Phạm Quang Khang (KHANGPQ3)",
    email: "khangpq3@fpt.edu.vn",
    subtitle: "(BM SE)",
  });

  const updateProfile = (newInfo) => {
    setProfileInfo((prev) => ({ ...prev, ...newInfo }));
  };

  return (
    <ProfileContext.Provider value={{ profileInfo, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
