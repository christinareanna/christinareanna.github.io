import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../Contentful/GetEntries";
import Sidebar from "../components/Sidebar";
import "../Blogs.css";
import "../darkMode.css";

const Blogs = ({ isOpen, toggle, theme }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then((res) => setPosts(res));
    }, []);

    return (
        <div className={`Blogs ${theme}`}>
            <div className="sidebar">
                <Sidebar toggle={toggle} isopen={isOpen} />
            </div>
            <div className="container h-height">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="heading">Blogs</h1>
                        <div className="row">
                            {posts?.map((post) => (
                                <div className="col-lg-4">
                                    {theme === "dark" ?
                                        <div className="card">
                                            <Link to={`/${post.slug}`}>
                                                <img
                                                    src={post?.postImage?.fields.file.url}
                                                    className="card-image-top image-custom"
                                                    alt="..."
                                                />
                                                <div className="card-body text-justify card-body-custom">
                                                    <h2 className="card-title h2">{post?.postHeader}</h2>
                                                </div>
                                            </Link>
                                        </div>
                                        :
                                        <div className="card">
                                            <Link to={`/${post.slug}`}>
                                                <img
                                                    src={post?.postImage?.fields.file.url}
                                                    className="card-image-top image-custom"
                                                    alt="..."
                                                />
                                                <div className="card-body text-justify card-body-custom">
                                                    <h2 className="card-title h2">{post?.postHeader}</h2>
                                                </div>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blogs;