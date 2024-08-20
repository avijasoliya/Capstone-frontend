import clsx from "clsx";
import { divide } from "@/assets/images";
import { Icons } from "@/constants";
import { SSButton, SSSlider } from "..";
import { InputNumber, Layout, Slider } from "antd";
import styles from "./SSFooter.module.css";
import { useFooterHook } from "@/hooks";
import soundImage from "../../assets/images/sound.png";

export const SSFooter = () => {
  const {
    like,
    play,
    setPlay,
    setLike,
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
    handlePlayPreviousMusic,
    handlePlayNextMusic,
    audioRef,
  } = useFooterHook();
  const { Footer } = Layout;
  return (
    <Footer
      className={clsx(
        styles.footer,
        "d-grid align-items-center position-relative"
      )}
    >
      {soundDetails && (
        <>
          <div>
            <div className="d-flex align-items-center justify-content-start gap-4">
              <div className={clsx(styles.footerPlayImg, "ratio ratio-1x1")}>
                <img src={soundImage} alt="divide" />
              </div>
              <div className={styles.mediaDetils}>
                <h5 className="lh-base fw-semibold text-ellipsis line-clamp-1">
                  {soundDetails?.title}
                </h5>
                <p className="h6 fw-medium lh-base text-ellipsis line-clamp-1">
                  {soundDetails?.publisher}
                </p>
              </div>
              <SSButton
                variant={"priamry"}
                linkIcons
                isLike={like}
                icon={Icons.Like}
                className={styles.linkButton}
                handleClick={() => setLike(!like)}
              />
            </div>
          </div>
          <div
            className={clsx(
              styles.mediaPlayerWrapper,
              "d-flex align-items-center flex-column justify-content-center"
            )}
          >
            <div
              className={clsx(
                styles.mediaControls,
                "d-flex align-items-center justify-content-center"
              )}
            >
              <SSButton
                variant={"priamry"}
                className={styles.mediaPlayerPlayButton}
                onlyIcon={true}
                disabled
                icon={Icons.Shuffle}
              />

              <SSButton
                variant={"priamry"}
                className={styles.mediaPlayerPlayButton}
                onlyIcon={true}
                icon={Icons.Rewind}
                handleClick={() => handlePlayPreviousMusic()}
              />
              {/* {console.log({ play })} */}
              <SSButton
                variant={"priamry"}
                onlyIcon={true}
                icon={play ? Icons.Play : Icons.Pause}
                className={clsx(styles.mediaPlayerPlayButton, styles.mediPlay)}
                handleClick={() => playMusic()}
              />
              <SSButton
                variant={"priamry"}
                className={styles.mediaPlayerPlayButton}
                onlyIcon={true}
                icon={Icons.Forward}
                handleClick={() => handlePlayNextMusic()}
              />

              <SSButton
                variant={"priamry"}
                className={styles.mediaPlayerPlayButton}
                onlyIcon={true}
                disabled
                handleClick={() =>
                  SetRepeat((prevState) => (prevState + 1) % 3)
                }
                icon={
                  repeat === 1
                    ? Icons.Repeat
                    : repeat === 2
                    ? Icons.RepeatOne
                    : Icons.RepeatMinimalistic
                }
              />
            </div>
            <div
              className={clsx(
                styles.musicTimerWrapper,
                "gap-3 align-items-center justify-content-center audio-container"
              )}
            >
              <audio
                ref={audioRef}
                src={soundDetails?.url}
                controls
                controlsList="nodownload noplaybackrate"
              />

              {/* <p className="h6 clr-gray-active">00:30</p>
            <SSSlider className={styles.musicSlider} />
            <p className="h6 clr-gray-active">02:30</p> */}
            </div>
          </div>
          <div
            className={clsx(
              styles.footerRight,
              "align-items-center justify-content-end"
            )}
          >
            <SSButton
              variant={"priamry"}
              className={styles.mediaPlayerPlayButton}
              onlyIcon={true}
              icon={getAppropriateIcon()}
              handleClick={() => handleSoundToggle()}
            />
            <SSSlider
              className={styles.volumeSlider}
              min={0}
              max={1}
              step={0.01}
              tooltip={false}
              // value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </>
      )}
    </Footer>
  );
};
