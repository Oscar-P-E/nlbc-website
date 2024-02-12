import Header from "~/app/_components/Header";
import Footer from "~/app/_components/Footer";
import { FaYoutube } from "react-icons/fa";

export default function Sermons() {
  const channelID = "UCOaNxf0WXHnr5hKqKcwbYSA";
  // start with UU instead of UC
  const allVideosID = channelID.replace("UC", "UU");

  const videoIndices = Array.from({ length: 3 }, (_, i) => i + 2);

  return (
    <>
      <Header />

      <div className="prose prose-zinc prose-invert mx-auto w-11/12 max-w-screen-xl px-0 pb-24 pt-32 text-center md:prose-lg lg:prose-2xl prose-img:my-0">
        <h1 className="">Watch Preaching Online</h1>
        <h3 className="pb-4 pt-10 text-left capitalize opacity-80">
          Latest video:
        </h3>
        <div className="relative aspect-video">
          <iframe
            className="absolute left-0 top-0 h-full w-full rounded-lg"
            title="Latest Upload"
            allowFullScreen
            src={`https://www.youtube.com/embed?listType=playlist&list=${allVideosID}`}
          ></iframe>
        </div>

        <h3 className="pb-4 pt-10 text-left capitalize opacity-80">
          Previous Videos:
        </h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {videoIndices.map((i) => (
            <div key={i} className="relative aspect-video">
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                title={`Previous Upload ${i}`}
                allowFullScreen
                src={`https://www.youtube.com/embed?listType=playlist&list=${allVideosID}&index=${i}`}
              ></iframe>
            </div>
          ))}
        </div>

        <div className="pb-4 pt-10">
          <h3>
            <a
              href={`https://www.youtube.com/@NewLifeBaptistChurch`}
              className="mx-auto w-fit border-b border-zinc-500 pt-4 text-zinc-300 no-underline transition-all ease-in-out hover:scale-105 hover:border-zinc-50 hover:text-zinc-50"
            >
              View more on{" "}
              <FaYoutube className="ml-2 inline-block align-top text-[1.25em]" />{" "}
              YouTube
            </a>
          </h3>
        </div>
      </div>

      <div className="border-y">
        <Footer />
      </div>
    </>
  );
}
