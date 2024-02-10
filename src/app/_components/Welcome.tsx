export default function Welcome() {
  return (
    <div className="prose prose-zinc mx-auto max-w-none bg-zinc-200 px-4 pb-20 pt-36 md:prose-lg lg:prose-2xl prose-img:my-0 prose-img:rounded-xl">
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-3 justify-items-center gap-10 font-body ">
        <div className="col-span-3 w-full rounded-xl border-4 border-zinc-900 py-14 prose-headings:my-0">
          <h1 className="mx-auto w-fit text-center uppercase">
            Welcome to New Life Baptist Church
          </h1>
        </div>

        <img
          src="/img/group_photo.png"
          alt="Welcome to New Life Baptist Church"
          className="col-span-3 max-h-[40rem] w-full object-cover object-center"
        />

        <div className="col-span-3 rounded-xl bg-zinc-100 px-14 py-14 prose-headings:mt-0 prose-p:mt-0">
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
