import axios from "axios";
import { addSuddestedVido } from "../reduser/videosReduser";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
const headersOption = {
  "X-RapidAPI-Key": "570f0ed2cdmsh30dc44b8e51f7b7p18bb4ajsn19eabb1c5b1f",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export function getSuggestedVideos(categorySelect, region) {
  const options = {
    method: "GET",
    url: baseUrl + "/search",
    params: !!categorySelect
      ? {
          q: categorySelect,
          part: "snippet,id",
          regionCode: region,
          maxResults: "50",
          order: "date",
        }
      : {
          relatedToVideoId: "7ghhRHRP6t4",
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
    headers: headersOption,
  };

  return axios.request(options);
}

export function getVideoDetails(videoId) {
  const options = {
    method: "GET",
    url: baseUrl + "/videos",
    params: { part: "contentDetails,snippet,statistics", id: videoId },
    headers: headersOption,
  };

  return axios.request(options);
}

export function getChannelDetails(channelId) {
  const options = {
    method: "GET",
    url: baseUrl + "/channels",
    params: { part: "snippet,statistics", id: channelId },
    headers: headersOption,
  };

  return axios.request(options);
}

export function getChannelVideos(channelId) {
  const options = {
    method: "GET",
    url: baseUrl + "/search",
    params: {
      channelId: channelId,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: headersOption,
  };

  return axios.request(options);
}
