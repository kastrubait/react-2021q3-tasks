import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getListResultsById} from "../../core/services/youtube.service";
import {CardItem} from "../../core/types/card-item";
import {InfoMessage} from "../../core/types/infoMessage";
import {Message} from "../message/Message";
import {Preloader} from "../preloader/preloader";
import "./style.scss";

export const Details: React.FC = () => {
  const params: {id: string} = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoInfo, setVideoInfo] = useState<CardItem[]>([]);
  const [message, setMessage] = useState<InfoMessage>({
    show: false,
    text: "",
    type: "message",
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        await getListResultsById([params.id]).then((response) => {
          if (response) {
            console.log(response);
            setVideoInfo(response.data.items);
          }
        });
      } catch (errors) {
        setMessage({
          show: true,
          text: errors.message,
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {videoInfo.map((item) => (
        <div key={item.id}>
          <h4 className="detail_header">
            Details about video with Id = {item.id}
          </h4>
          <p>
            <strong>channelTitle: </strong>
            <span>{item.snippet.channelTitle}</span>
          </p>
          <p>
            <strong>title: </strong>
            <span>{item.snippet.title}</span>
          </p>
          <p>
            <strong>published: </strong>
            <span>{item.snippet.publishedAt}</span>
          </p>
          <p>
            <strong>thumbnailsUrl: </strong>{" "}
            <span>{item.snippet.thumbnails.default?.url}</span>
          </p>
          <p>
            <strong>description: </strong>{" "}
            <span>
              {item.snippet.description
                ? item.snippet.description
                : "no description"}
            </span>
          </p>
          <p>
            <strong>defaultLanguage: </strong>{" "}
            <span>
              {item.snippet.defaultAudioLanguage
                ? item.snippet.defaultAudioLanguage
                : "-"}
            </span>
          </p>
          <p>
            <strong>viewCount: </strong>
            <span>{item.statistics.viewCount}</span>
          </p>
          <p>
            <strong>likeCount: </strong>
            <span>{item.statistics.likeCount}</span>
          </p>
          <p>
            <strong>dislikeCount: </strong>{" "}
            <span>{item.statistics.dislikeCount}</span>
          </p>
        </div>
      ))}
      <Preloader isLoading={isLoading} />
      <Message data={message} />
    </>
  );
};
