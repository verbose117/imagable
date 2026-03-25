import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Convert your App Icon to Match Different Platforms</title>
      </Head>

      <div className="relative h-screen w-screen bg-black text-white flex items-center justify-center">
        {/* Form Card */}
        <div className="w-120 outline-1 outline-white/10 grid grid-cols-2 gap-4 rounded-lg">
          <div>
            <h1>Upload</h1>
          </div>

          <div>
            <span>Hello</span>
          </div>
        </div>
      </div>
    </main>
  );
}
