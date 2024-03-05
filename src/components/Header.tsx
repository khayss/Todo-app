import NotesIcon from "@mui/icons-material/Notes";
import { FunctionComponent } from "react";
import { HeaderStyle } from "../utils/styles/HeaderStyle";

const Header: FunctionComponent = () => {
  return (
    <header {...HeaderStyle.header}>
      <nav {...HeaderStyle.nav}>
        <div {...HeaderStyle.iconContainer}>
          <NotesIcon fontSize="inherit" />
          <h1>Cur</h1>
        </div>
        <ul {...HeaderStyle.menuList}>
          <li>
            <a href="">Donate</a>
          </li>
          <li>
            <a href="">Docs</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
