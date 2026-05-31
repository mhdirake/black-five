import '@/assets/css/general.css';
import 'react-toastify/dist/ReactToastify.css';

import LocalizationProvider from '@/context/LocalizationProvider';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import StoreProvider from '@/context/StoreProvider';
import ThemeSwitcherContextProvider from '@/context/ThemeSwitcherContextProvider';
import { DEFAULT_LOCALE, LOCALE_COOKIE, getDirection, isLocale } from '@/localization/config';

import { Bebas_Neue } from 'next/font/google';
import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata = {
  title: 'Mehdi Rashidi — Frontend Developer',
  description: 'Personal portfolio of Mehdi Rashidi, a Frontend Developer.',
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction} className={bebasNeue.variable}>
      <body>
        <ToastContainer position="top-right" rtl={direction === 'rtl'} />
        <StoreProvider>
          <LocalizationProvider initialLocale={locale}>
            <ThemeSwitcherContextProvider>
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </ThemeSwitcherContextProvider>
          </LocalizationProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
