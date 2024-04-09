import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check Offline or Online status
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus; // boolean
};

export default useOnlineStatus;
