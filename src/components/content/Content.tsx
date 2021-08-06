import React, {ChangeEvent, useState} from "react";
import picture from "../../assets/img/picture.jpeg";
import {SearchBar} from "../search-bar/SearchBar";
import {CardsList} from "../cards-list/CardsList";
import {CardItem} from "../../core/types/card-item";
import {getListResults} from "../../core/services/youtube.service";
import "./style.scss";
import {InfoMessage} from "../../core/types/infoMessage";
import {Message} from "../message/Message";

export const Content: React.FC<unknown> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [videos, setVideos] = useState<CardItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<InfoMessage>({
    show: false,
    text: "",
    type: "message",
  });

  const setStateMessage = (show: boolean, text: string, type: string): void => {
    setMessage({
      show,
      text,
      type,
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
    setIsLoading(true);
    try {
      await getListResults("mitaka", "viewCount", 10, "").then((response) => {
        setVideos(response);
        // console.log(response);
      });
    } catch (errors) {
      setStateMessage(true, errors.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <img src={picture} alt="rocket" className="center-img" />
      <SearchBar
        placeholder="Search..."
        searchTerm={searchTerm}
        handleSubmit={handleSubmit}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Search"}
      </button>
      <CardsList data={videos} />
      <Message data={message} />;
    </div>
  );
};
