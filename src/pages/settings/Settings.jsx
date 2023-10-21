import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";


export default function Settings() {

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" >
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://th.bing.com/th/id/OIP.cfYaAA--b6NeLq1Gqb0YhAHaEK?pid=ImgDet&w=1600&h=900&rs=1"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="User "
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
          />
          <label>Password</label>
          <input
            type="password"
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          
        </form>
      </div>
      <SideBar />
    </div>
  );
}
