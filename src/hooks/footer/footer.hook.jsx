import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "@/constants";
import { useEffect } from "react";
import { storeSoundDetail } from "@/reducers/sound/sound.reducer";

export const useFooterHook = () => {
  const dispatch = useDispatch();

  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(true);
  const [repeat, SetRepeat] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const { soundDetails, soundList } = useSelector(
    (state) => state.storeSoundReducer || {}
  );

  const handleSoundToggle = () => {
    setIsMuted(() => {
      if (isMuted) {
        // setVolume(prevVolume);
        if (audioRef.current) {
          audioRef.current.volume = 1;
        }
        return false;
      } else {
        if (audioRef.current) {
          audioRef.current.volume = 0;
        }
        // setPrevVolume(volume);
        setVolume(0);
        return true;
      }
    });
  };

  const playMusic = () => {
    setPlay(() => {
      if (play) {
        if (audioRef.current) {
          audioRef.current.play();
        }
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
          //   audioRef.current.currentTime = 0;
        }
      }
    });
    setPlay(!play);
  };

  const getAppropriateIcon = () => {
    if (isMuted) {
      return Icons.SongMute;
    } else if (volume <= 50) {
      return Icons.SongSmall;
    } else {
      return Icons.SongFull;
    }
  };

  const handleVolumeChange = (event) => {
    // console.log({ event });
    if (event === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    if (audioRef.current) {
      audioRef.current.volume = event;
    }
    // setVolume(event);
  };

  const handlePlayPreviousMusic = () => {
    setPlay(!play);
    const index = soundList?.items?.findIndex(
      (item) => item.id === soundDetails?.id
    );
    if (index !== 0) {
      dispatch(storeSoundDetail(soundList?.items[index - 1]));
    } else {
      dispatch(
        storeSoundDetail(soundList?.items[soundList?.items?.length - 1])
      );
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 2000);
  };
  const handlePlayNextMusic = () => {
    setPlay(!play);
    // console.log({ soundList });
    const index = soundList?.items?.findIndex(
      (item) => item.id === soundDetails?.id
    );
    // console.log({ index });
    if (index !== soundList?.items?.length - 1) {
      dispatch(storeSoundDetail(soundList?.items[index + 1]));
    } else {
      dispatch(storeSoundDetail(soundList?.items[0]));
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        if (play) {
          setPlay(false);
        }
      }
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (audioRef?.current) {
        audioRef?.current?.play();
        if (play) {
          setPlay(false);
        }
      }
    }, 1000);
  }, [soundDetails]);
  return {
    like,
    setLike,
    play,
    setPlay,
    currentTime,
    repeat,
    volume,
    setVolume,
    soundDetails,
    prevVolume,
    handleSoundToggle,
    handleVolumeChange,
    getAppropriateIcon,
    playMusic,
    audioRef,
    handlePlayPreviousMusic,
    handlePlayNextMusic,
  };
};
