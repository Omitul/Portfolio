import { Navbar } from "@/components/navbar";

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto max-w-7xl p-5 min-h-screen">
        {children}
      </div>
    </>
  );
}
