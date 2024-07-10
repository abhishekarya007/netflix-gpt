import useGetTrailerKey from "../hooks/useGetTrailerKey";

const VideoBackGround = ({ videoId, isMainScreen = false }) => {
  const mainScreen = isMainScreen ? "&mute=1" : "";

  const videoKey = useGetTrailerKey(videoId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoKey +
          "?&autoplay=1&loop=1&playlist=" +
          videoKey +
          mainScreen
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
