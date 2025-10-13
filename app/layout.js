import '@/assets/css/general.css';
import 'react-toastify/dist/ReactToastify.css';

import StoreProvider from '@/context/StoreProvider';
import ThemeSwitcherContextProvider from '@/context/ThemeSwitcherContextProvider';

import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: '',
  description: '',
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          rtl={true}
          className={'toast-custom-style'}
        />

        <StoreProvider>
          <ThemeSwitcherContextProvider>
            {children}
          </ThemeSwitcherContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
