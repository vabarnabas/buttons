import Navbar from "@/components/navbar/navbar";

export default function HomeLayout({ hero }: { hero: React.ReactNode }) {
  return (
    <>
      <div className="pt-36 pb-6 w-full max-w-[1280px] px-6 flex flex-col flex-grow">
        {hero}
      </div>
      <Navbar />
    </>
  );
}
