import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPosts() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const [posts, setPosts] = useState([]);

    fetch(`${apiUrl}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data));

    let count = 1;

    return (
        <>
            <div className="container mt-3">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Immagine</th>
                            <th scope="col">Titolo</th>
                            <th scope="col">Autore</th>
                            <th scope="col">Pubblicato</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <th scope="row">{count++}</th>
                                <td>
                                    <img
                                        src={post.image}
                                        alt={post.title + "-image"}
                                        width="200"
                                    />
                                </td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.published ? "Sì" : "No"}</td>
                                <td>
                                    <Link
                                        to={`/posts/${post.id}`}
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        👁
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
