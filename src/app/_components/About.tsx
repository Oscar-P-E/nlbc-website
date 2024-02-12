import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="prose prose-zinc mx-auto max-w-none bg-zinc-400 px-4 pb-24 pt-32 md:prose-lg lg:prose-2xl prose-img:my-0"
      >
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 justify-items-center gap-10 font-body md:w-11/12 md:grid-cols-12">
          <div className="col-span-full flex w-full grow items-center rounded-xl border-4 border-zinc-50 py-10 shadow-lg prose-headings:my-0 md:py-14">
            <h1 className="mx-auto w-fit text-center  text-zinc-50">
              About Us
            </h1>
          </div>

          <div className="col-span-full rounded-xl bg-zinc-200 px-8 py-14 italic text-opacity-80 shadow-lg prose-p:my-0 md:col-span-6 md:px-14 xl:col-span-4">
            <p>
              <FaQuoteLeft className="mb-8 opacity-30" />
              Go ye therefore, and teach all nations, baptizing them in the name
              of the Father, and of the Son, and of the Holy Ghost: Teaching
              them to observe all things whatsoever I have commanded you: and,
              lo, I am with you alway, even unto the end of the world. Amen.
            </p>
            <footer className="pt-4 not-italic opacity-80">
              – Matthew 28:19-20
            </footer>
            <FaQuoteRight className="ml-auto mt-8 opacity-30" />
          </div>

          <div className="relative col-span-full shadow-lg prose-headings:my-0 md:col-span-6 xl:col-span-8">
            <img
              src="/img/first_gathering.jpg"
              alt="Our first church gathering"
              className="h-full w-full rounded-xl object-cover object-right lg:object-left"
            />
            <span className="absolute bottom-0 left-0 w-full rounded-b-xl bg-zinc-900 bg-opacity-50 p-4 text-center font-heading text-zinc-100 text-opacity-90 opacity-80">
              Our first church gathering
            </span>
          </div>

          <div className="col-span-full rounded-xl bg-zinc-200 px-8 py-14 shadow-lg prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0 md:col-span-full md:px-14 xl:col-span-8">
            <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent">
              Our Church
            </h2>
            <p>
              New Life Baptist Church commenced meeting on Sunday October 1st
              2017. The church exists to fulfil the Great Commission given by
              Jesus Christ. This can be divided into three key goals:
            </p>

            <ol>
              <li>
                Reach the Sunshine Coast and surrounding area with the Gospel of
                Jesus Christ.
              </li>

              <li>
                Baptise new converts in the name of the Father, Son and Holy
                Ghost.
              </li>
              <li>Teach the truths of the whole Bible without compromise.</li>
            </ol>

            <p>
              Visitors are more than welcome. If you have any questions about
              the church, contact us by clicking here!
            </p>
          </div>

          <div className="col-span-full rounded-xl bg-zinc-500 px-8 py-14 italic text-zinc-100 text-opacity-80 shadow-lg prose-p:my-0 md:col-span-6 md:px-14 xl:col-span-4">
            <p>
              <FaQuoteLeft className="mb-8 opacity-30" />
              Therefore we are buried with him by baptism into death: that like
              as Christ was raised up from the dead by the glory of the Father,
              even so we also should walk in newness of life.
            </p>
            <footer className="pt-4 not-italic opacity-80">– Romans 6:4</footer>
            <FaQuoteRight className="ml-auto mt-8 opacity-30" />
          </div>

          {/* subdivision */}
          <div className="relative col-span-full grid grid-rows-1 gap-10 prose-headings:my-0 md:col-span-6 md:grid-rows-2 xl:col-span-4">
            <div className="relative row-span-1 shadow-lg prose-headings:my-0">
              <img
                src="/img/pastor_2.jpg"
                alt="Pastor Kevin Sepulveda"
                className="h-full w-full rounded-xl object-cover object-center"
              />
              <span className="absolute bottom-0 left-0 w-full rounded-b-xl bg-zinc-900 bg-opacity-50 p-4 text-center font-heading text-zinc-100 text-opacity-90 opacity-80">
                Pastor Kevin Sepulveda
              </span>
            </div>

            <div className="row-span-1 flex flex-col justify-center rounded-xl bg-zinc-600 px-8 py-14 italic text-zinc-100 text-opacity-80 shadow-lg prose-p:my-0 md:px-14">
              <p>
                <FaQuoteLeft className="mb-8 opacity-30" />
                This is a true saying, if a man desire the office of a bishop,
                he desireth a good work.
              </p>
              <footer className="pt-4 not-italic opacity-80">
                – 1 Timothy 3:1
              </footer>
              <FaQuoteRight className="ml-auto mt-8 opacity-30" />
            </div>
          </div>
          {/* end subdivision */}

          <div className="col-span-full rounded-xl bg-zinc-200 px-8 py-14 shadow-lg prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0 md:col-span-full md:px-14 xl:col-span-8">
            <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent">
              Our Pastor
            </h2>
            <p>
              Born in Sydney NSW, Pastor Kevin Sepulveda was privileged to grow
              up in a Christian home. At the age of four, his mother presented
              him the gospel and he believed on Jesus Christ as his saviour.
            </p>

            <p>
              He was baptised at Bethany Baptist Church in 2002 and wedded his
              wife Cristina in 2004. The Lord has blessed their marriage with
              twelve precious children.
            </p>
            <p>
              At Victory Baptist Church, Kevin Sepulveda served in numerous
              ministries including as a Church Deacon and the Sunday School
              Superintendent. During this time he became aware of the need for a
              gospel preaching church on Sunshine Coast QLD.
            </p>
            <p>
              Experience was gained at The Church in Punchbowl with assisting in
              the early growth of a new church. It was there that he was
              ordained to the office of a Bishop on Sunday the 24th of September
              2017 and sent to establish New Life Baptist Church one week later.
            </p>
            <p>
              Due to families seeking a like-minded church in Sydney, Pastor
              Kevin Sepulveda also established Blessed Hope Baptist Church on
              the 1st July 2018 and makes frequent visits to the congregation
              there.
            </p>
          </div>

          <div className="col-span-full rounded-xl bg-zinc-200 px-8 py-14 shadow-lg prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0 md:col-span-full md:px-14 xl:col-span-7">
            <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent">
              Soul Winning
            </h2>
            <p>
              While many churches today are primarily focused with internal
              activities, the first work which Jesus commissioned and commanded
              grows largely neglected. In an effort to combat this tide, New
              Life Baptist Church has set the goal of knocking on the door of
              every house in the Sunshine Coast with the hope of giving a clear
              presentation of the gospel of Jesus Christ.
            </p>
            <p>
              To accomplish this, many of our members actively preach the gospel
              door-to-door in our local communities. Training is provided for
              inexperienced volunteers who are not required to speak until they
              feel personally ready to do so.
            </p>
            <p>
              Click here for a soul winning training video course for beginners.
            </p>
          </div>

          <div className="col-span-full rounded-xl  bg-zinc-600 px-8 py-14 italic text-zinc-100 text-opacity-80 shadow-lg prose-p:my-0 md:col-span-full md:px-14 xl:col-span-5">
            <p>
              <FaQuoteLeft className="mb-8 opacity-30" />
              And how shall they preach, except they be sent? as it is written,
              How beautiful are the feet of them that preach the gospel of
              peace, and bring glad tidings of good things!
            </p>
            <footer className="pt-4 not-italic opacity-80">
              – 1 Timothy 3:1
            </footer>
            <FaQuoteRight className="ml-auto mt-8 opacity-30" />
          </div>

          <div className="relative col-span-full max-h-[32rem]  w-full shadow-lg prose-headings:my-0 md:col-span-6 xl:col-span-5">
            <img
              src="/img/soul_winning_pastor.jpg"
              alt="Pastor Soul Winning"
              className="h-full w-full rounded-xl object-cover object-center"
            />
          </div>

          <div className="relative col-span-full max-h-[32rem] w-full shadow-lg prose-headings:my-0 md:col-span-6 xl:col-span-7">
            <img
              src="/img/soul_winning_1.webp"
              alt="Soul Winning (Censored)"
              className="h-full w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="curves-2">
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
