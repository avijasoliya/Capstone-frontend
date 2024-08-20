import { doFetchSoundList, doFetchSoundSearchList } from "@/actions";
import {
  storeSoundDetail,
  storeSoundList,
} from "@/reducers/sound/sound.reducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const usePlaylistsHook = () => {
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
  }, []);

  const fetchSound = async () => {
    try {
      setIsLoading(true);
      let playList = localStorage.getItem("playList"); // 'Alice'
      if (playList) {
        let playListData = JSON.parse(playList);

        await setSoundList({ items: playListData });
        await dispatch(storeSoundList({ items: playListData }));
        //   await setSoundDetail(soundListResponse?.data?.items[0]);
        //   await dispatch(storeSoundDetail(soundListResponse?.data?.items[0]));
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
