import { doFetchSoundList, doFetchSoundSearchList } from "@/actions";
import {
  storeSoundDetail,
  storeSoundList,
} from "@/reducers/sound/sound.reducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSearchHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [soundList, setSoundList] = useState({});
  const [soundDetail, setSoundDetail] = useState({});
  const [paginationData, setPaginationData] = useState({
    per_page: 25,
    page: 1,
    search: "",
  });

  useEffect(() => {
    fetchSound();
  }, [paginationData]);

  const fetchSound = async () => {
    try {
      setIsLoading(true);
      if (paginationData.search != "" && paginationData.search?.length > 1) {
        const soundListResponse = await doFetchSoundSearchList({
          ...paginationData,
        });
        if (soundListResponse?.status === 200) {
          await setSoundList(soundListResponse?.data);
          await dispatch(storeSoundList(soundListResponse?.data));
          //   await setSoundDetail(soundListResponse?.data?.items[0]);
          //   await dispatch(storeSoundDetail(soundListResponse?.data?.items[0]));
        }
      } else {
        await setSoundList({});
        await dispatch(storeSoundList({}));
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error occurred during fetching schools:", error);
      setIsLoading(false);
    }
  };
  const handleInputChange = async (event) => {
    const { value } = event?.target;
    setPaginationData({ ...paginationData, search: value });
  };

  const handleChangeSong = async (data) => {
    // event.preventDefault();
    let playList = localStorage.getItem("playList"); // 'Alice'
    if (playList) {
      playList = JSON.parse(playList);
      const checkMusic = playList?.find((item) => item.id == data.id);
      if (!checkMusic) {
        playList.push(data);
        localStorage.setItem("playList", JSON.stringify(playList));
      }
    } else {
      localStorage.setItem("playList", JSON.stringify([data]));
    }
    dispatch(storeSoundDetail(data));
    setSoundDetail(data);
  };

  return {
    isLoading,
    soundList,
    soundDetail,
    handleInputChange,
    handleChangeSong,
  };
};
