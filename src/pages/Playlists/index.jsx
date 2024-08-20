import { SSTitle, Songs } from "@/components";
import { artistsList, playlist, popularReleases } from "@/constants";
import styles from "./Playlists.module.css";
import clsx from "clsx";
import SSAudioPlayer from "@/components/SSAudioPlayer/SSAudioPlayer";
import { usePlaylistsHook } from "@/hooks";
import soundImage from "../../assets/images/sound.png";
import { useMemo } from "react";

const Playlists = () => {
  const {
    isLoading,
    soundList,
    soundDetail,
    handleInputChange,
    handleChangeSong,
  } = usePlaylistsHook();
  const PlayListData = useMemo(() => {
    console.log({ soundList });
    return (
      soundList &&
      soundList?.items?.map((list, index) => (
        <Songs
          name={list.title}
          img={soundImage}
          key={index}
          alt={list.title}
          title={list.publisher}
          data={list}
          handleChangeSong={handleChangeSong}
        />
      ))
    );
  }, [soundList]);
  return (
    <>
      <h1>Playlists</h1>
      <section className="section-normal-space-mt">
        <SSTitle
          title={"Made For You "}
          href={"/favorite-playlist"}
          content={""}
        />
        <div
          className={clsx(
            styles.artistsListWrapper,
            "d-grid justify-content-start"
          )}
        >
          {PlayListData}
        </div>
      </section>
    </>
  );
};

export default Playlists;
