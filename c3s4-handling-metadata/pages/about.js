import Head from 'next/head';
import Link from 'next/link';
import Widget from "@/pages/components/Widget";
function AboutPage() {
  return (
    <>
      <Head>
        <title> about.js title </title>
      </Head>
      <div>
        <Link href='/'passHref>
          link to root
        </Link>
      </div>
      <div>
        <Widget pageName='about' />
      </div>
    </>
  );
}
export default AboutPage;
