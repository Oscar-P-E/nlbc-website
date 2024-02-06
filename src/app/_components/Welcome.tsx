export default function Welcome() {
  return (
    <div className="prose md:prose-lg lg:prose-2xl prose-zinc prose-img:mb-0 mx-auto max-w-none bg-zinc-200 px-4 pb-12 pt-36">
      <div className="flex items-center">
        <h1 className="mx-auto pb-8 text-zinc-950 ">
          Welcome to New Life Baptist Church
        </h1>
      </div>
      <div className="mx-auto grid w-4/5 max-w-screen-xl grid-cols-3 gap-x-10 gap-y-9 font-serif">
        <img
          src="/img/group_photo.jpg"
          alt="Welcome to New Life Baptist Church"
          className="col-span-3 h-96 w-full rounded-xl object-cover object-center"
        />
        <div className="col-span-2 rounded-xl bg-zinc-100 px-14 py-8 text-zinc-950">
          <p>
            Thank you for visiting the website of New Life Baptist Church.
            Please take a moment to look through our website.
          </p>

          <p>
            We are a local New Testament Church reaching the Sunshine Coast and
            its surrounding area with the Gospel of Jesus Christ. We are an
            independent, fundamental, King James Bible only, soul winning
            Baptist church.
          </p>

          <p>
            Our desire is to equip believers to walk in newness of life by not
            compromising on bible truths found in God’s Word. We encourage your
            attendance and look forward to meeting you at one of our church
            services.
          </p>
        </div>
        <div className="prose-p:mb-0 max-w-prose rounded-xl bg-zinc-500 px-14 py-8 italic text-zinc-100">
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
