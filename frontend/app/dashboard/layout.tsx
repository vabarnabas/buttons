import DashboardNavbar from "@/components/navbar/dashboard-navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pt-20 pb-6 w-full max-w-[1280px] px-6 flex flex-col flex-grow">
        {children}
      </div>
      <DashboardNavbar />
    </>
  );
}
