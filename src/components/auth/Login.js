import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../store/StateProvider";
import { actionTypes } from "../../store/reducer";

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
          alt="f"
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt="facebook"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
