import { SSTitle, Songs } from "@/components";
import { artistsList, playlist, popularReleases } from "@/constants";
import styles from "./Dashborad.module.css";
import clsx from "clsx";
import SSAudioPlayer from "@/components/SSAudioPlayer/SSAudioPlayer";
import { useHomeHook } from "@/hooks";
import soundImage from "../../assets/images/sound.png";

const Dashborad = () => {
  const {
    isLoading,
    soundList,
    soundDetail,
    handleInputChange,
    handleChangeSong,
  } = useHomeHook();
  // console.log({ soundDetail });
  return (
    <>
      <h1>Home</h1>
      {/* <section className="section-normal-space-mt">
        <SSTitle
          title={"Your favorite artists"}
          href={"/favorite-artists"}
          content={"See All"}
        />
        <div
          className={clsx(
            styles.artistsListWrapper,
            "d-grid justify-content-start"
          )}
        >
          {artistsList &&
            artistsList?.map((list, index) => (
              <Songs
                artist={true}
                name={list.name}
                img={list.img}
                key={index}
                title={list.subtitle}
              />
            ))}
        </div>
      </section> */}
      <section className="section-normal-space-mt">
        <SSTitle
          title={"Made For You "}
          href={"/favorite-playlist"}
          content={"See All"}
        />
        <div
          className={clsx(
            styles.artistsListWrapper,
            "d-grid justify-content-start"
          )}
        >
          {soundList &&
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
      {/* <section className="section-normal-space-mt">
        <SSTitle
          title={"Popular Releases"}
          href={"/popular-releases"}
          content={"See All"}
        />
        <div
          className={clsx(
            styles.artistsListWrapper,
            "d-grid justify-content-start"
          )}
        >
          {popularReleases &&
            popularReleases?.map((list, index) => (
              <Songs
                name={list.name}
                img={list.img}
                key={index}
                title={list.subtitle}
              />
            ))}
        </div>
      </section> */}
      {/* <SSAudioPlayer audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" /> */}
    </>
  );
};

export default Dashborad;
