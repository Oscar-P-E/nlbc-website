export default function Welcome() {
  return (
    <div className="prose md:prose-lg lg:prose-2xl prose-zinc prose-img:my-0 mx-auto max-w-none border-t-4 border-dashed border-zinc-200 bg-zinc-400 px-4 pb-44 pt-36">
      <div className="mx-auto grid w-11/12 max-w-screen-xl grid-cols-3 justify-items-center gap-10 font-serif">
        <div className="prose-headings:my-0 col-span-3 w-full rounded-md border-4 border-zinc-100 py-14">
          <h1 className="mx-auto w-fit text-center  uppercase text-zinc-100">
            About Us
          </h1>
        </div>
        <div className="prose-p:my-0 py- max-w-prose rounded-md bg-zinc-200 px-14 py-14 italic">
          <p className="bg-gradient-to-tl from-zinc-950 to-cyan-800 bg-clip-text text-transparent">
            <span className="text-3xl not-italic">&ldquo;</span>Go ye therefore,
            and teach all nations, baptizing them in the name of the Father, and
            of the Son, and of the Holy Ghost: Teaching them to observe all
            things whatsoever I have commanded you: and, lo, I am with you
            alway, even unto the end of the world. Amen.
            <span className="text-3xl not-italic">&nbsp;&rdquo;</span>
          </p>
          <footer className="pt-4 not-italic text-zinc-700 opacity-80">
            – Matthew 28:19-20
          </footer>
        </div>

        <div className="prose-headings:mt-0 prose-ol:pl-0 prose-ol:ml-4 col-span-2 rounded-md bg-zinc-200 px-14 py-14 text-zinc-950">
          <h2 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text  uppercase text-transparent">
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
      </div>
    </div>
  );
}
