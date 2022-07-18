import React from "react";
import UserType from "../types/UserType";

const friendsJSON: UserType[] = [
  {
    id: 1,
    username: "Nikola",
    img_url:
      "https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg",
    is_active: true,
  },
  {
    id: 2,
    username: "Nikola 2",
    img_url:
      "https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg",
    is_active: false,
  },
];

export const useFriendsStatus = () => {
  const [activeFriends, updateActiveFriends] = React.useState<object>([]);
  const [offlineFriends, updateOfflineFriends] = React.useState<object>([]);
  React.useEffect(() => {
    const activeUsers: object[] = [];
    const offlineUsers: object[] = [];

    friendsJSON.forEach((user: UserType) => {
      if (user.is_active) activeUsers.push(user);
      if (!user.is_active) offlineUsers.push(user);

      updateActiveFriends(activeUsers);
      updateOfflineFriends(offlineUsers);
    });
  }, []);

  return { activeFriends, offlineFriends };
};
