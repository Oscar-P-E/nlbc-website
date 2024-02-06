export default function Welcome() {
  return (
    <div className="prose md:prose-lg lg:prose-2xl prose-zinc prose-img:my-0 prose-img:rounded-md mx-auto max-w-none bg-zinc-200 px-4 pb-44 pt-36">
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-3 justify-items-center gap-10 font-serif">
        <div className="prose-headings:my-0 col-span-3 w-full rounded-md border-4 border-zinc-100 py-14">
          <h1 className="mx-auto w-fit text-center  uppercase text-zinc-800">
            Welcome to New Life Baptist Church
          </h1>
        </div>

        <img
          src="/img/group_photo.jpg"
          alt="Welcome to New Life Baptist Church"
          className="col-span-3 max-h-[40rem] w-full object-cover object-center"
        />

        <div className="prose-headings:mt-0 prose-p:mt-0 col-span-2 rounded-md bg-zinc-100 px-14 py-14 text-zinc-950">
          <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text uppercase text-transparent">
            Thank you for visiting us
          </h2>
          <p>
            Thank you for visiting the website of New Life Baptist Church.
            Please take a moment to look through our website.
          </p>
          <p>
            We are a local New Testament Church reaching the Sunshine Coast and
            its surrounding area with the Gospel of Jesus Christ. We are an{" "}
            <span className="italic">
              independent, fundamental, King James Bible only, soul winning
              Baptist church.
            </span>
          </p>
          <p>
            Our desire is to equip believers to walk in newness of life by not
            compromising on Bible truths found in God’s Word. We encourage your
            attendance and look forward to meeting you at one of our church
            services.
          </p>
        </div>
        <div className="prose-p:my-0 py- max-w-prose rounded-md bg-zinc-500 px-14 py-14 italic text-zinc-100">
          <p>
            <span className="text-3xl not-italic">&ldquo;</span>Therefore we are
            buried with him by baptism into death: that like as Christ was
            raised up from the dead by the glory of the Father, even so we also
            should walk in newness of life.
            <span className="text-3xl not-italic">&nbsp;&rdquo;</span>
          </p>
          <footer className="pt-4 not-italic opacity-80">– Romans 6:4</footer>
        </div>
      </div>
    </div>
  );
}
