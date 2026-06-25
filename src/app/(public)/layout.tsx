import SmoothScrollProvider from "@/providers/smooth-scroll-provider";
import ScrollBlur from "@/components/shared/ScrollBlur";
import LoadingReveal from "@/components/element/loading-reveal";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <LoadingReveal />
      <Navbar />
      {children}
      <ScrollBlur />
      <Footer />
    </SmoothScrollProvider>
  );
}
