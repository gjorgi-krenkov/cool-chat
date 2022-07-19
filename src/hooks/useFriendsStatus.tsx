import React from "react";
import UserType from "../types/UserType";

const friendsJSON: UserType[] = [
  {
    id: 1,
    handle: "Nikola",
    img_url:
      "https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg",
    is_active: true,
  },
  {
    id: 2,
    handle: "Nikola 2",
    img_url:
      "https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg",
    is_active: false,
  },
];

export const useFriendsStatus = () => {
  const [activeFriends, updateActiveFriends] = React.useState<UserType[]>([]);
  const [offlineFriends, updateOfflineFriends] = React.useState<UserType[]>([]);
  React.useEffect(() => {
    const activeUsers: UserType[] = [];
    const offlineUsers: UserType[] = [];

    friendsJSON.forEach((user: UserType) => {
      if (user.is_active) activeUsers.push(user);
      if (!user.is_active) offlineUsers.push(user);

      updateActiveFriends(activeUsers);
      updateOfflineFriends(offlineUsers);
    });
  }, []);

  return { activeFriends, offlineFriends };
};
