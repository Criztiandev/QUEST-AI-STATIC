import Section from "@/components/template/layout/section";

const VideoSection = () => {
  return (
    <Section>
      <div className="relative w-full h-[600px] p-[1px] bg-gradient-to-r from-[hsl(192,98%,49%)]/50 via-[hsl(234,69%,67%)]/30 to-[hsl(192,98%,49%)]/50 rounded-2xl">
        <div className="absolute inset-[1px] bg-black rounded-2xl p-4">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/Uc-apOIYbFM?si=O3iMK8yXOtBPjYQk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default VideoSection;
