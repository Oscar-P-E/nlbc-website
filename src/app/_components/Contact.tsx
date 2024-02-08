export default function Contact() {
  return (
    <div className="prose md:prose-lg lg:prose-2xl prose-zinc prose-img:my-0 mx-auto max-w-none bg-zinc-100 px-4 pb-20 pt-20">
      <div className="font-body mx-auto grid w-11/12 max-w-screen-xl grid-cols-12 justify-items-center gap-10">
        <div className="prose-headings:my-0 col-span-12 flex w-full grow items-center rounded-xl border-4 border-zinc-900 py-14">
          <h1 className="mx-auto w-fit text-center text-zinc-900">
            Contact Us
          </h1>
        </div>

        <div className="prose-headings:mt-0 prose-ol:pl-0 prose-ol:ml-4 prose-li:list-none prose-li:pl-0 prose-ul:pl-0 prose-ul:ml-0 col-span-7 w-full rounded-xl bg-zinc-200 px-14 py-14">
          <h3 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent ">
            Visit in person...
          </h3>

          <h4 className="pt-4 text-cyan-900">Service Times:</h4>

          <ul>
            <li>Sunday morning – 9:00 am</li>
            <li>Sunday afternoon – 12:00 pm</li>
            <li>Wednesday evening – 6:30 pm</li>
          </ul>

          <h4 className="pt-4 text-cyan-900">Address:</h4>
          <p>
            <a href="https://maps.app.goo.gl/RoPjrxszdkgHibCu5">
              Unit 9, 16 Sydal Street, Little Mountain, QLD 4551
            </a>
          </p>

          <iframe
            className="h-[32rem] w-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.376684273211!2d153.09941747558022!3d-26.7961320767168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93994f4d12a009%3A0x54367813e5357f5a!2sNew%20Life%20Baptist%20Church!5e0!3m2!1sen!2sau!4v1707386498087!5m2!1sen!2sau"
            // width="800"
            // height="600"
            // style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="prose-headings:mt-0 prose-ol:pl-0 prose-ol:ml-4 col-span-5 rounded-xl bg-zinc-200 px-14 py-14">
          <h3 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5  text-transparent ">
            Send an email...
          </h3>
          <form>
            <label htmlFor="name" className="text-zinc-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mb-4 w-full rounded-xl border-2 border-zinc-900 p-2"
            />

            <label htmlFor="email" className="text-zinc-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mb-4 w-full rounded-xl border-2 border-zinc-900 p-2"
            />

            <label htmlFor="message" className="text-zinc-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mb-4 w-full rounded-xl border-2 border-zinc-900 p-2"
            ></textarea>

            <button
              type="submit"
              className="mx-auto min-w-[10rem] rounded-xl bg-zinc-900 p-2 text-zinc-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
