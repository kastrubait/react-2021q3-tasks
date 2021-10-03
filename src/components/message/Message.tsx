import React from "react";
import {InfoMessage} from "../../core/types/infoMessage";

interface DataMessage {
  data: InfoMessage;
}

export const Message: React.FC<DataMessage> = (props) => {
  const {data} = props;
  return (
    <>
      {data.show && (
        <div className="notification__content">
          <p className={data.type}>{data.text}</p>
        </div>
      )}
    </>
  );
};
