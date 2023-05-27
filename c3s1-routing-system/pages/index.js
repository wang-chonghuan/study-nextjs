import IndexPage from "@/pages/image";
import Link from "next/link";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * Starting with Next.js 13, <Link> renders as <a>, so attempting to use <a> as a child is invalid.
 */
function Homepage() {
  return (
    <>
      <div>
        <div>This is the homepage</div>
        <IndexPage/>
        <img
          src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
          alt='A beautiful English Setter'
          width={500}
          height={200}
        />
      </div>
    </>
  );
}

export default Homepage;
