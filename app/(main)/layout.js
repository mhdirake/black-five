import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Main } from "@/components/layout/style";
import { UserContextProvider } from "@/context/UserContextProvider";
import authApi from "@/store/slices/auth/authApi";


const getUser = async () => {
  try {
    const data = await authApi.userInformation()

    return data;
  } catch (e) {
    return null;
  }
};

export default async function MainLayout({ children }) {
  const user = await getUser();

  return (
    <UserContextProvider userInfo={user}>
      <Main>
        <Header />
        {children}
        <Footer />
      </Main>
    </UserContextProvider>
  );
}
