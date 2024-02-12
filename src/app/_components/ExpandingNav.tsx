import Link from "next/link";

import { Spin as Hamburger } from "hamburger-react";

type ExpandingNavProps = {
  isScrolled: boolean;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
};

export default function ExpandingNav({
  isScrolled,
  isExpanded,
  setIsExpanded,
}: ExpandingNavProps) {
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-12  ${isScrolled || isExpanded ? "w-full bg-zinc-900" : "w-fit"} text-zinc-200 lg:hidden`}
    >
      <Hamburger
        /** The color of the icon bars, accepts any CSS-parsable argument. */
        // color="rgb(228 228 231 / var(--tw-text-opacity)"
        /** The animation direction of the icon, left or right. */
        direction="right"
        /** The vertical distance between the lines. Small (sm), medium (md) or large (lg). */
        distance="sm"
        /** The duration of the animation. Can be set to zero if no animation is desired. */
        // duration={0.6}
        /** A valid `transition-timing-function` CSS value, for example 'ease-out'. */
        easing="ease-in-out"
        /** Hides the default browser focus style. */
        hideOutline={true}
        /** An ARIA label to improve accessibility. */
        label="Toggle Navigation"
        /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
        onToggle={toggleExpanded}
        /** Specifies if the icon bars should be rounded. */
        rounded={true}
        /** A number between 12 and 48, which sets the size of the icon. */
        // size={40}
        /** A way to provide your own state action. Has to be used together with a state value (the `toggled` prop). */
        // toggle?: Dispatch<SetStateAction<boolean>>;
        /** A way to provide your own state value. Can be used together with a state action (the `toggle` prop). */
        // toggled?: boolean;
      />

      <h1
        className={`${isScrolled || isExpanded ? "opacity-100 delay-100" : "pointer-events-none opacity-0 duration-0"} absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center font-heading text-xl font-bold transition-all duration-1000`}
      >
        New Life Baptist Church
      </h1>

      {isExpanded && (
        <ul className="fade-in prose-xl absolute left-0 top-12 flex h-svh w-full flex-shrink grow flex-col bg-zinc-900 bg-opacity-95 p-8 pt-12 font-heading uppercase text-zinc-200 prose-li:p-0">
          <li>
            <Link
              className="flex w-full border-b border-zinc-200 border-opacity-50 pb-1 transition-all hover:opacity-50"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex border-b border-zinc-200 border-opacity-50 pb-1 transition-all hover:opacity-50"
              href="/#about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="flex border-b border-zinc-200 border-opacity-50 pb-1 transition-all hover:opacity-50"
              href="/#contact"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              className="flex border-b border-zinc-200 border-opacity-50 pb-1 transition-all hover:opacity-50"
              href="/sermons"
            >
              Watch Sermons
            </Link>
          </li>

          <li>
            <Link
              className="flex border-b border-zinc-200 border-opacity-50 pb-1 transition-all hover:opacity-50"
              href="/give"
            >
              Ways to Give
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
