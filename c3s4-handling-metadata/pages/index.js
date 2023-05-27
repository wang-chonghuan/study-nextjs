import Head from 'next/head';
import Link from 'next/link';
import Widget from "@/pages/components/Widget";
function IndexPage() {
  return (
    <>
      <Head>
        <title> index.js title </title>
      </Head>
      <div>
        <Link href='/about' passHref>
          link to about
        </Link>
      </div>
      <div>
        <Widget pageName='index' />
      </div>
    </>
  );
}
export default IndexPage;
