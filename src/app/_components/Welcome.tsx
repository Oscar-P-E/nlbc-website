export default function Welcome() {
  return (
    <div className="prose prose-zinc mx-auto max-w-none bg-zinc-200 px-4 pb-20 pt-20 md:prose-lg lg:prose-2xl prose-img:my-0 prose-img:rounded-xl">
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-3 justify-items-center gap-10 font-body">
        <div className="relative col-span-3 w-full rounded-xl shadow-xl prose-headings:my-0 prose-h1:text-4xl sm:prose-h1:text-6xl md:prose-h1:text-7xl lg:prose-h1:text-8xl">
          <h1 className="absolute top-1/2 mx-auto w-full -translate-y-1/2 border-y-4 border-y-zinc-50 bg-zinc-900   bg-opacity-50 py-8 text-center uppercase text-zinc-50">
            Welcome to <span className="whitespace-nowrap">New Life</span>{" "}
            <span className="whitespace-nowrap">Baptist Church</span>
          </h1>
          <img
            src="/img/group_photo.jpg"
            alt="Welcome to New Life Baptist Church"
            className="col-span-3 max-h-[26rem] w-full object-cover object-center"
          />
        </div>

        <div className="col-span-3 rounded-xl bg-zinc-100 px-14 py-14 shadow-lg prose-headings:mt-0 prose-p:mt-0">
          <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5 text-transparent">
            Thank you for visiting us
          </h2>

          <p>
            We are a local New Testament Church reaching the Sunshine Coast and
            its surrounding area with the Gospel of Jesus Christ. We are an{" "}
            independent, fundamental, King James Bible only, soul winning
            Baptist church.
          </p>
          <p>
            Our desire is to equip believers to walk in newness of life by not
            compromising on Bible truths found in God’s Word. We encourage your
            attendance and look forward to meeting you at one of our church
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
