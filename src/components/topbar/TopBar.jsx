import '@fortawesome/fontawesome-free/css/all.css'
import "./topbar.css";

export default function TopBar() {

  return (
    <div className="top">
        <img className="topLeft"
            src="../../../img/App logo.png"  alt="logo" >
        </img>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME     </li>
                <li className="topListItem">ABOUT    </li>
                <li className="topListItem"> CONTACT </li>
                <li className="topListItem"> WRITE   </li>
                <li className="topListItem" > LOGOUT </li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://image.myanimelist.net/ui/bfln5jRa_L37ziNWm-xNvHB1dN3lNmKVgwJBOudmieHOPT2gLbuA9EqTeMdGCyqtsfSwOGx_s2DXYM-LOQAlWTvC6CIMd9gy7izNf6enplM" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  );
}
