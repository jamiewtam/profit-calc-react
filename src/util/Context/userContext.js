import React from "react";
import axios from "axios";

export const userContext = React.createContext({});

export const useGetUser = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios({
      url: "http://127.0.0.1:9000/api/v1/findDBUser",
    })
      .then((data) => {
        const user = data.data.data.user
        if (user.timeZone === 'None Selected') {
          user.timeZone = 'Etc/GMT+1';
        }
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return [user, loading];
};
