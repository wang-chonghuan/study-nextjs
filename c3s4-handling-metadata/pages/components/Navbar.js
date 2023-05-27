import Link from 'next/link';
import themeContext from "@/pages/components/themeContext";
import {useContext} from "react";

function Navbar() {

  const {theme, toggleTheme} = useContext(themeContext);
  const newThemeName = theme === 'dark' ? 'light' : 'dark';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
      }}
    >
      <div>My Website</div>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/contacts">Contacts </Link>
        <button onClick={toggleTheme}>
          set {newThemeName} theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;
