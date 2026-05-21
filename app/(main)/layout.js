import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Main } from "@/components/layout/style";

export default async function MainLayout({ children }) {

  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
}
