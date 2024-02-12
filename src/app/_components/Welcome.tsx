export default function Welcome() {
  return (
    <>
      <div className="prose prose-lg prose-zinc mx-auto max-w-none bg-zinc-200 px-5 pb-24 pt-24 lg:prose-2xl prose-img:my-0 prose-img:rounded-xl">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 justify-items-center gap-10 font-body md:w-11/12">
          <div className="relative col-span-full w-full rounded-xl shadow-xl prose-headings:my-0 prose-h1:text-4xl sm:prose-h1:text-6xl md:prose-h1:text-7xl lg:prose-h1:text-8xl">
            <h1 className="absolute top-1/2 mx-auto w-full -translate-y-1/2 border-y-4 border-y-zinc-50 bg-zinc-900 bg-opacity-50 py-2 text-center uppercase text-zinc-50 sm:py-8">
              Welcome to <span className="whitespace-nowrap">New Life</span>{" "}
              <span className="whitespace-nowrap">Baptist Church</span>
            </h1>
            <img
              src="/img/group_photo.jpg"
              alt="Welcome to New Life Baptist Church"
              className="max-h-[26rem] w-full object-cover object-center"
            />
          </div>

          <div className="col-span-full rounded-xl bg-zinc-100 px-6 py-10 md:py-14 shadow-lg prose-headings:mt-0 prose-p:mt-0 md:px-14">
            <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5 text-transparent">
              Thank you for visiting us
            </h2>

            <p>
              We are a local New Testament Church reaching the Sunshine Coast
              and its surrounding area with the Gospel of Jesus Christ. We are
              an independent, fundamental, King James Bible only, soul winning
              Baptist church.
            </p>
            <p>
              Our desire is to equip believers to walk in newness of life by not
              compromising on Bible truths found in God’s Word. We encourage
              your attendance and look forward to meeting you at one of our
              church services.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="curves">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
