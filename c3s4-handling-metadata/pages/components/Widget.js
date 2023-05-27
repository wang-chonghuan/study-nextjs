import { useState } from 'react';
import Head from 'next/head';

function Widget({pageName}) {
  const [isNewTitle, setIsNewTitle] = useState(false);
  if (isNewTitle) {
    return (
      <>
        <Head>
          <title> this is the new title of {pageName} page</title>
        </Head>
        <div>
          <button onClick={() =>setIsNewTitle(false)}>
            show old title
          </button>
          new title showed
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={() =>setIsNewTitle(true)}>
        show new title
      </button>
      old title showed
    </>
  );
}
export default Widget;
