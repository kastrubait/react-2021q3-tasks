import React from "react";
import "./style.scss";

interface Loading {
  isLoading: boolean;
}

export const Preloader: React.FC<Loading> = ({isLoading}) => {
  if (isLoading) {
    return (
      <div className="overlay">
        <div className="preloader">
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-dot" />
          <div className="preloader-text" />
        </div>
      </div>
    );
  }
  return <></>;
};
