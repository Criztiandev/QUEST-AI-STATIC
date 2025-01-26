import Section from "@/components/template/layout/section";

const VideoSection = () => {
  return (
    <Section>
      <div className="w-full h-[600px] rounded-lg p-4 flex">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/Uc-apOIYbFM?si=O3iMK8yXOtBPjYQk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default VideoSection;
