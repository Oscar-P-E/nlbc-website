export default function Contact() {
  return (
    <div
      id="contact"
      className="prose prose-lg prose-zinc mx-auto max-w-none bg-zinc-100 px-5 pb-24 pt-32 lg:prose-2xl prose-img:my-0"
    >
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 justify-items-center gap-10 font-body md:w-11/12 md:grid-cols-12">
        <div className="col-span-full flex w-full grow items-center rounded-xl border-4 border-zinc-900 py-10 shadow-lg prose-headings:my-0 md:py-14">
          <h1 className="mx-auto w-fit text-center text-zinc-900">
            Contact Us
          </h1>
        </div>

        <div className="col-span-full w-full rounded-xl bg-zinc-200 px-6 py-10 shadow-lg prose-headings:mt-0 prose-ul:ml-0 prose-ul:pl-0 prose-li:list-none prose-li:pl-0 md:col-span-6 md:px-14 md:py-14 xl:col-span-7">
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
            className="aspect-video w-full md:aspect-[4/3]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.376684273211!2d153.09941747558022!3d-26.7961320767168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93994f4d12a009%3A0x54367813e5357f5a!2sNew%20Life%20Baptist%20Church!5e0!3m2!1sen!2sau!4v1707386498087!5m2!1sen!2sau"
            // width="800"
            // height="600"
            // style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-span-full rounded-xl bg-zinc-200 px-6 py-10 shadow-lg prose-headings:mt-0 prose-ol:ml-4 prose-ol:pl-0 md:col-span-6 md:px-14 md:py-14 xl:col-span-5">
          <h3 className="w-fit bg-gradient-to-r from-zinc-950 to-cyan-900 bg-clip-text pb-1.5 text-transparent">
            Send an email...
          </h3>
          <form className="">
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
              className="w-full border-collapse rounded-xl bg-zinc-900 p-2 font-heading text-zinc-100 shadow-lg transition-all hover:bg-green-600 hover:text-white md:w-40"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
