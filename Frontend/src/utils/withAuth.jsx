import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        router("/auth");
      }
    }, [router, token]);

    if (!token) return null; // Prevent flicker

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
