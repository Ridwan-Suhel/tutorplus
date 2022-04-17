import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import gglIcon from "../../../../images/google-icon.png";
import Loading from "../Loading/Loading";
import "./AuthSocial.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthSocial = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGglSignin = () => {
    signInWithGoogle();
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (error?.message?.includes("popup-closed-by-user")) {
      toast("Oops! You just close the popup.");
    }
  }, [user, error]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="mb-3 text-center d-flex justify-content-center">
        <button
          onClick={handleGglSignin}
          className="btn btn-dark py-2 fw-normal auth-btn  d-flex align-items-center justify-content-center"
        >
          <img style={{ width: "25px" }} src={gglIcon} alt="googleIcon" />{" "}
          <span className="ms-2">Continue with google</span>
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthSocial;
