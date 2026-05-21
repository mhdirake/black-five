import '@/assets/css/general.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';

import LocalizationProvider from '@/context/LocalizationProvider';
import StoreProvider from '@/context/StoreProvider';
import ThemeSwitcherContextProvider from '@/context/ThemeSwitcherContextProvider';
import { DEFAULT_LOCALE, LOCALE_COOKIE, getDirection, isLocale } from '@/localization/config';

import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Black Five | پلتفرم حراج، بلیت و بازار ثانویه',
  description: 'Black Five پلتفرم یکپارچه حراج آنلاین، مدیریت بلیت، بازار ثانویه و کیف پول دیجیتال برای تجربه معامله شفاف و امن است.',
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <body>
        <ToastContainer
          position="top-right"
          rtl={direction === 'rtl'}
          className={'toast-custom-style'}
        />

        <StoreProvider>
          <LocalizationProvider initialLocale={locale}>
            <ThemeSwitcherContextProvider>
              {children}
            </ThemeSwitcherContextProvider>
          </LocalizationProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
