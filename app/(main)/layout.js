import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Main } from "@/components/layout/style";

export default function MainLayout({ children }) {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
}
