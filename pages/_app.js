import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout/index";
import CartContext from "../context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}

export default MyApp;
