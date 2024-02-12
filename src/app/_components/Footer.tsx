import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="prose prose-zinc prose-invert mx-auto w-11/12 max-w-screen-xl px-0 pb-12 pt-20 text-center md:prose-lg lg:prose-xl">
        <h1 className="">New Life Baptist Church</h1>
        <p className="">
          <a
            href="https://maps.app.goo.gl/RoPjrxszdkgHibCu5"
            className="no-underline hover:underline"
          >
            Unit 9, 16 Sydal Street, Little Mountain, QLD 4551
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
