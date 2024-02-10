import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function About() {
  return (
    <div
      id="about"
      className="prose prose-zinc mx-auto max-w-none bg-zinc-400 px-4 pb-20  pt-20 md:prose-lg lg:prose-2xl prose-img:my-0"
    >
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-12 justify-items-center gap-10 font-body">
        <div className="col-span-12 flex w-full grow items-center rounded-xl border-4 border-zinc-50 py-14 prose-headings:my-0">
          <h1 className="mx-auto w-fit text-center  text-zinc-50">About Us</h1>
        </div>

        <div className="col-span-4 max-w-prose rounded-xl bg-zinc-200 px-14 py-14 italic text-opacity-80 prose-p:my-0">
          <p>
            <FaQuoteLeft className="mb-8 opacity-30" />
            Go ye therefore, and teach all nations, baptizing them in the name
            of the Father, and of the Son, and of the Holy Ghost: Teaching them
            to observe all things whatsoever I have commanded you: and, lo, I am
            with you alway, even unto the end of the world. Amen.
          </p>
          <footer className="pt-4 not-italic opacity-80">
            – Matthew 28:19-20
          </footer>
          <FaQuoteRight className="ml-auto mt-8 opacity-30" />
        </div>

        <div className="relative col-span-8 prose-headings:my-0">
          <img
            src="/img/first_gathering.jpg"
            alt="Our first church gathering"
            className="h-full w-full rounded-xl object-cover object-right lg:object-left"
          />
          <span className="absolute bottom-0 left-0 w-full rounded-b-xl bg-zinc-900 bg-opacity-50 p-4 text-center font-heading text-zinc-100 text-opacity-90 opacity-80">
            Our first church gathering
          </span>
        </div>

        <div className="col-span-8 rounded-xl bg-zinc-200 px-14 py-14 prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0">
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
            Visitors are more than welcome. If you have any questions about the
            church, contact us by clicking here!
          </p>
        </div>

        <div className="col-span-4 max-w-prose rounded-xl bg-zinc-500 px-14 py-14 italic text-zinc-100 text-opacity-80 prose-p:my-0">
          <p>
            <FaQuoteLeft className="mb-8 opacity-30" />
            Therefore we are buried with him by baptism into death: that like as
            Christ was raised up from the dead by the glory of the Father, even
            so we also should walk in newness of life.
          </p>
          <footer className="pt-4 not-italic opacity-80">– Romans 6:4</footer>
          <FaQuoteRight className="ml-auto mt-8 opacity-30" />
        </div>

        {/* subdivision */}
        <div className="relative col-span-4 grid grid-rows-2 gap-10 prose-headings:my-0">
          <div className="relative row-span-1 prose-headings:my-0">
            <img
              src="/img/pastor_2.jpg"
              alt="Pastor Kevin Sepulveda"
              className="h-full w-full rounded-xl object-cover object-center"
            />
            <span className="absolute bottom-0 left-0 w-full rounded-b-xl bg-zinc-900 bg-opacity-50 p-4 text-center font-heading text-zinc-100 text-opacity-90 opacity-80">
              Pastor Kevin Sepulveda
            </span>
          </div>

          <div className="row-span-1 flex max-w-prose flex-col justify-center rounded-xl bg-zinc-600 px-14 py-14 italic text-zinc-100 text-opacity-80 prose-p:my-0">
            <p>
              <FaQuoteLeft className="mb-8 opacity-30" />
              This is a true saying, if a man desire the office of a bishop, he
              desireth a good work.
            </p>
            <footer className="pt-4 not-italic opacity-80">
              – 1 Timothy 3:1
            </footer>
            <FaQuoteRight className="ml-auto mt-8 opacity-30" />
          </div>
        </div>
        {/* end subdivision */}

        <div className="col-span-8 rounded-xl bg-zinc-200 px-14 py-14 prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0">
          <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent">
            Our Pastor
          </h2>
          <p>
            Born in Sydney NSW, Pastor Kevin Sepulveda was privileged to grow up
            in a Christian home. At the age of four, his mother presented him
            the gospel and he believed on Jesus Christ as his saviour.
          </p>

          <p>
            He was baptised at Bethany Baptist Church in 2002 and wedded his
            wife Cristina in 2004. The Lord has blessed their marriage with
            twelve precious children: Isabel, Nicolas, Matias, Cristian,
            Sebastian, Jonathan, Liliana, Emilia, Samuel, Adrian, Elias, and
            Elena.
          </p>
          <p>
            At Victory Baptist Church, Kevin Sepulveda served in numerous
            ministries including as a Church Deacon and the Sunday School
            Superintendent. During this time he became aware of the need for a
            gospel preaching church on Sunshine Coast QLD.
          </p>
          <p>
            Experience was gained at The Church in Punchbowl with assisting in
            the early growth of a new church. It was there that he was ordained
            to the office of a Bishop on Sunday the 24th of September 2017 and
            sent to establish New Life Baptist Church one week later.
          </p>
          <p>
            Due to families seeking a like-minded church in Sydney, Pastor Kevin
            Sepulveda also established Blessed Hope Baptist Church on the 1st
            July 2018 and makes frequent visits to the congregation there.
          </p>
        </div>

        <div className="col-span-7 rounded-xl bg-zinc-200 px-14 py-14 prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0">
          <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent">
            Soul Winning
          </h2>
          <p>
            While many churches today are primarily focused with internal
            activities, the first work which Jesus commissioned and commanded
            grows largely neglected. In an effort to combat this tide, New Life
            Baptist Church has set the goal of knocking on the door of every
            house in the Sunshine Coast with the hope of giving a clear
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

        <div className="col-span-5 max-w-prose rounded-xl bg-zinc-600 px-14 py-14 italic text-zinc-100 text-opacity-80 prose-p:my-0">
          <p>
            <FaQuoteLeft className="mb-8 opacity-30" />
            And how shall they preach, except they be sent? as it is written,
            How beautiful are the feet of them that preach the gospel of peace,
            and bring glad tidings of good things!
          </p>
          <footer className="pt-4 not-italic opacity-80">
            – 1 Timothy 3:1
          </footer>
          <FaQuoteRight className="ml-auto mt-8 opacity-30" />
        </div>

        <div className="relative col-span-5 max-h-[32rem] w-full prose-headings:my-0">
          <img
            src="/img/soul_winning_pastor.jpg"
            alt="Pastor Soul Winning"
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="relative col-span-7 max-h-[32rem] w-full prose-headings:my-0">
          <img
            src="/img/soul_winning_1.webp"
            alt="Soul Winning (Censored)"
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
