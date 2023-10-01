import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getSinglePost } from "../Contentful/GetEntries";
import Markdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import "./SinglePost.css";

const SinglePost = ({ toggle, isOpen, theme }) => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getSinglePost(id).then((res) => {
            setPost(res.items[0].fields);
            setIsLoading(true);
        });
    }, [id]);

    //sidebar no open
    return (
        <>
            <div className="sidebar">
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div className="container">
                {isLoading && (
                    <div className="shadow text-center p-5 mt-5">
                        <h1 className="h1 my-5">{post?.postHeader}</h1>
                        <img
                            src={post?.postImage?.fields.file.url}
                            alt={"..."}
                            style={{ width: "620px" }}
                        />
                        {/* <h3 className="h3 mt-5">Description</h3> */}
                        <Markdown className="post">
                            {post?.postDescription}
                        </Markdown>
                    </div>
                )}
                {theme === "dark" ? <button className="btn my-5" onClick={() => navigate("/blogs")}>{"<<"} Back</button> : <button className="btn my-5" onClick={() => navigate("/blogs")}>{"<<"} Back</button>}
            </div>
        </>
    )
}

export default SinglePost;