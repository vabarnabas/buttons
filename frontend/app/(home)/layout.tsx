import Footer from "@/components/foorter/footer";
import Navbar from "@/components/navbar/navbar";

export default function HomeLayout({
  hero,
  pricing,
}: {
  hero: React.ReactNode;
  pricing: React.ReactNode;
}) {
  return (
    <>
      <div className="pt-36 pb-6 w-full max-w-[1280px] px-6 flex flex-col flex-grow">
        {hero}
        {pricing}
      </div>
      <Footer />
      <Navbar />
    </>
  );
}
