import request from "../utils/request";

export const wordCloud = () => {
  return request({
    url: "/screen/wordcloud",
    method: "GET",
  });
};
