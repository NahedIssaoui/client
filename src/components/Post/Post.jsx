import "./post.css"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
            src="https://images5.alphacoders.com/606/thumbbig-606284.webp"
            alt=""
        />
        <div className="postInfo">
            <span className="postTitle"> Anime title </span>
            <hr />
            <span className="postDate">1 hour ago </span>
        </div>
    </div>
  )
}

export default Post
