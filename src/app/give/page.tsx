import Header from "~/app/_components/Header";
import Footer from "~/app/_components/Footer";

export default function Give() {
  return (
    <>
      <Header />
      <div className="bg-zinc-100">
        <div className="prose prose-xl prose-zinc mx-auto bg-zinc-100 px-5 pb-24 pt-12 text-zinc-900 md:prose-lg lg:prose-2xl prose-ul:ml-0 prose-ul:pl-4 prose-li:pl-0 prose-img:my-0 md:w-11/12 md:pt-32">
          <h1 className="text-center">Tithes and Offerings</h1>

          <h3 className="pt-4 text-left capitalize text-cyan-900">
            Offering Box:
          </h3>
          <p>
            You can contribute to the work of the church by giving financially
            into the offering box inside the church building.
          </p>

          <h3 className="pt-4 text-left capitalize text-cyan-900">
            Bank Transfer:
          </h3>
          <table className="max-w-prose">
            <tbody>
              <tr>
                <td className="font-bold">Name</td>
                <td>New Life Baptist Church</td>
              </tr>
              <tr>
                <td className="font-bold">BSB</td>
                <td>064406</td>
              </tr>
              <tr>
                <td className="font-bold">Account</td>
                <td>10855064</td>
              </tr>
              <tr>
                <td className="font-bold">Bank</td>
                <td>Commonwealth Bank</td>
              </tr>
            </tbody>
          </table>

          <h3 className="pt-4 text-left capitalize text-cyan-900">
            Digital Giving:
          </h3>
          <p className="">
            Give to our church with Tithe.ly:
            <a className="block" href="https://tithe.ly/give?c=1224611">
              https://tithe.ly/give?c=1224611
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
