import { doFetchSoundList } from "@/actions";
import {
  storeSoundDetail,
  storeSoundList,
} from "@/reducers/sound/sound.reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useHomeHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [soundList, setSoundList] = useState({});
  const [soundDetail, setSoundDetail] = useState({});
  const { soundDetails } = useSelector(
    (state) => state.storeSoundReducer || {}
  );

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

      const soundListResponse = await doFetchSoundList({ ...paginationData });
      if (soundListResponse?.status === 200) {
        await setSoundList(soundListResponse?.data);
        await dispatch(storeSoundList(soundListResponse?.data));
        if (soundDetails == "" || soundDetails == null) {
          await setSoundDetail(soundListResponse?.data?.items[0]);
          await dispatch(storeSoundDetail(soundListResponse?.data?.items[0]));
        }
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
