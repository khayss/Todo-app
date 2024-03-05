import { FunctionComponent } from "react";
import { FooterStyle } from "../utils/styles/FooterStyle";

const Footer: FunctionComponent = () => {
  return (
    <footer {...FooterStyle.footer}>
      <div {...FooterStyle.container}>
        <p>Made with ❤️ by khayss</p>
        <p>&#169; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
