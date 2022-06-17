import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'

// 핵심 페이지
function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
