import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex p-5 min-h-screen flex-col justify-evenly items-center bg-white w-2/3">
        <h1 className="text-3xl font-bold">splitr</h1>
        <h1 className="text-2xl">Split your bills with ease.</h1>
        <div>
          <Image
              src="/receiptaiimage.jpg"
              width={500}
              height={500}
              alt="splitr logo"
          />
        </div>
      </div>
    </main>
  );
}
