import { axiosApi, axiosApiSound } from "@/axiosAPI";

export const doFetchSoundList = async (
  search = "",
  page = 1,
  per_page = 25
) => {
  try {
    // /api/Tracks/tracksall?page=1&perPage=10&instrumental=false&vocals=vocals&genre=genre&mood=mood&score=score&tempo=tempo
    // const response = await axiosApiSound({
    //   method: "get",
    //   url: `api/Tracks/tracksall?page=${page}&perPage=${per_page}`,
    // });
    // return response;
    const response = await axiosApi({
      method: "get",
      url: "v1/sound/tracks/tracksall",
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const doFetchSoundSearchList = async ({
  search = "",
  page = 1,
  per_page = 25,
}) => {
  try {
    // /api/Tracks/tracksall?page=1&perPage=10&instrumental=false&vocals=vocals&genre=genre&mood=mood&score=score&tempo=tempo
    // const response = await axiosApiSound({
    //   method: "get",
    //   url: `api/Tracks/tracksall?page=${page}&perPage=${per_page}`,
    // });
    // return response;
    const response = await axiosApi({
      method: "get",
      url: `v1/sound/tracks/tracksall?search=${search}`,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const doFetchVocalsList = async () => {
  try {
    // api/TracksParameters/vocals
    const response = await axiosApiSound({
      method: "get",
      url: `api/TracksParameters/vocals`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const doFetchGenreList = async () => {
  try {
    // api/TracksParameters/genre
    const response = await axiosApiSound({
      method: "get",
      url: `api/TracksParameters/genre`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const doFetchMoodList = async () => {
  try {
    // api/TracksParameters/mood
    const response = await axiosApiSound({
      method: "get",
      url: `api/TracksParameters/mood`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const doFetchTempoList = async () => {
  try {
    // api/TracksParameters/tempo
    const response = await axiosApiSound({
      method: "get",
      url: `api/TracksParameters/tempo`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const doFetchScoreList = async () => {
  try {
    // api/TracksParameters/score
    const response = await axiosApiSound({
      method: "get",
      url: `api/TracksParameters/score`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
