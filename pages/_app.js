import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hallo</span>

      <style jsx global>
        {`
          a {
            color: orange;
          }
        `}
      </style>
    </>
  );
}
