import React from "react";
import {InfoMessage} from "../../core/types/infoMessage";

interface DataMessage {
  data: InfoMessage;
}

export const Message: React.FC<DataMessage> = (props) => {
  const {data} = props;
  // if (data.show) {
  return (
    <div className="notification__content">
      <p className="notification-text">{data.text}</p>
    </div>
  );
  // }
};
