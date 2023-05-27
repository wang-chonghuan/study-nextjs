import '@/styles/globals.css'
import Navbar from "@/pages/components/Navbar";
import {useState} from "react";
import ThemeContext from "@/pages/components/themeContext";

const themes = {
  dark: {
    background: 'black',
    color: 'white'
  },
  light: {
    background: 'white',
    color: 'black'
  }
};

function MyApp({Component, pageProps}) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div style={{
        width: '100%',
        minHeight: '100vh',
        ...themes[theme]
      }}>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

/*
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const additionalProps = await fetch(...)
  return {
    ...appProps,
    ...additionalProps
  }
};
*/

export default MyApp;
