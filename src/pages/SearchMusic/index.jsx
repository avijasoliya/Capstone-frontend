import { SSTitle, Songs } from "@/components";
import { artistsList, playlist, popularReleases } from "@/constants";
import styles from "./SearchMusic.module.css";
import clsx from "clsx";
import SSAudioPlayer from "@/components/SSAudioPlayer/SSAudioPlayer";
import { useSearchHook } from "@/hooks";
import soundImage from "../../assets/images/sound.png";
import { Input } from "antd";

const SearchMusic = () => {
  const {
    isLoading,
    soundList,
    soundDetail,
    handleInputChange,
    handleChangeSong,
  } = useSearchHook();
  // console.log({ soundDetail });
  return (
    <>
      <h1>Search</h1>

      <section className="section-normal-space-mt">
        <Input
          placeholder="search"
          name="search"
          className={styles.search}
          id="search"
          onChange={handleInputChange}
        />

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
          {playlist &&
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
            ))}
        </div>
      </section>
    </>
  );
};

export default SearchMusic;
