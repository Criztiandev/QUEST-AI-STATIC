const VideoSection = () => {
  return (
    <div className="w-full h-[800px] rounded-lg p-4 flex px-16">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/Uc-apOIYbFM?si=O3iMK8yXOtBPjYQk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
