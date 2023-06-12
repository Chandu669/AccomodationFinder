import React, { useEffect, useState } from 'react';
import '../App.css';
import { RequestState } from "../../RequestState";
import UserContext from '../context/UserContext';
import { User } from "../../models/User";
import { AuthService } from "../../servises/AuthService";
import { getMe, getToken } from '../../Services/AuthService';

function Auth({ children }) {
  const [user, setUser] = React.useState(User);  
  const [token, setToken] = React.useState(String);
  const [userRequestState, setUserRequestState] = useState<RequestState>(RequestState.INITIAL);
  if (!token) {
    const token = getToken();
    if (token) {
      setToken(token);
    } else {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/home";
      setTimeout(function () {
        setUser(undefined);
      }, 100);
    }
  }

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (token && !user && userRequestState === RequestState.INITIAL) {
      setUserRequestState(RequestState.LOADING);
      getMe()
        .then((res) => {
          if (res.success) {
            setUser(res.data);
            setUserRequestState(RequestState.SUCCESS);
          } else {
            setUserRequestState(RequestState.FAILED);
          }
        })
        .catch(() => {
          setUserRequestState(RequestState.FAILED);
        });
    }
  }, [token]);

  switch (userRequestState) {
    case RequestState.FAILED:
      logout();
      return <br />;
    case RequestState.SUCCESS:
      return (
        <div>
          <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
        </div>
      );
    default:
      return (
        <div className="pre-loader">
        </div>
      );
  }
}
export default Auth;
