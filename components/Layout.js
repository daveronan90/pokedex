import Head from "next/head";

function Layout({ title, description, children }) {
  return (
    <div className="container mx-auto max-w-xl min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
