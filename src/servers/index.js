import { wordCloud } from "../api/index";

export const getWordCloud = async () => {
  try {
    const res = await wordCloud();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
