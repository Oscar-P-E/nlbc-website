export default function Heaven() {
  return (
    <div className="prose md:prose-lg lg:prose-xl prose-zinc mx-auto flex h-[calc(100svh-12rem)] max-w-none bg-zinc-100 px-4">
      <div className="flex items-center">
        <h1 className="mx-auto w-3/4 bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text uppercase  text-transparent">
          Are you 100% sure that you are going to heaven?
        </h1>
      </div>
      <div className="flex items-center">
        <iframe
          width="720"
          height="405"
          src="https://www.youtube-nocookie.com/embed/jDkHWgPDRRE?si=KxOpHqBBZ_H1_Rn0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
