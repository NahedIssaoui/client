import './sidebar.css'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span> 
        <img
          src="https://i.postimg.cc/Y9DTR9MK/image-search-1651442834697.gif"
          alt=""
        />
        <p>
        <b> We Just Make Awesome Content For You!</b><br />
        We makes sure our soul reaches you in the form of articles,
        and our design team that aims to reach your heart rather than eyes and so many more unsung individuals at the with only one thought in their mind,
        to make awesome content for you.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
export default SideBar
