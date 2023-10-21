
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        
          <img src="https://th.bing.com/th/id/OIP.pjHcm51_dH3VhlJms9DxNgHaHa?pid=ImgDet&rs=1" alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Single Post Title
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"
                ></i>
                <i className="singlePostIcon far fa-trash-alt"
                ></i>
              </div>
          </h1>
        
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
              <b> Nahed</b>
          </span>
        </div>
       
          <textarea
            className="singlePostDescInput"
            value="sdfghjuiklmn bvcxsqza(yuèiolkfgttttglorempkibnkkjhjbbnnjjh"
          />
      </div>
    </div>
  );
}
