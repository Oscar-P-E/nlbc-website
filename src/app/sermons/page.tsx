import Header from "~/app/_components/Header";
import Sermons from "~/app/_components/sermons/Sermons";
import Footer from "~/app/_components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <Sermons />

      <div className="border-y">
        <Footer />
      </div>
    </div>
  );
}
