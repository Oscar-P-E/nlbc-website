import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="prose prose-lg prose-zinc prose-invert mx-auto max-w-screen-xl px-5 pb-12 pt-20 text-center lg:prose-xl md:w-11/12">
        <h1 className="">
          New Life <span className="whitespace-nowrap">Baptist Church</span>
        </h1>
        <p className="">
          <a
            href="https://maps.app.goo.gl/RoPjrxszdkgHibCu5"
            className="no-underline hover:underline"
          >
            Unit 9, 16 Sydal Street, Little Mountain,{" "}
            <span className="whitespace-nowrap">QLD 4551</span>
          </a>
        </p>
        <div className="text-4xl">
          {/* youtube, facebook */}
          <a
            href="https://www.youtube.com/@NewLifeBaptistChurch"
            className="mx-4"
          >
            <FaYoutube className="inline hover:scale-105" />
          </a>
          <a
            href="https://www.facebook.com/NLBCsunshinecoast/"
            className="mx-4"
          >
            <FaFacebook className="inline hover:scale-105" />
          </a>
        </div>
      </div>
    </footer>
  );
}
