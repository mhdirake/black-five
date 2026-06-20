import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Main } from "@/components/layout/style";

export default function MainLayout({ children }) {
  return (
    <Main>
      <CustomCursor />
      <Header />
      {children}
      <Footer />
    </Main>
  );
}
