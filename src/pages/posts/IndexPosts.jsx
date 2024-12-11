import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPosts() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const [posts, setPosts] = useState([]);

    // Index Function - Salva localmente nella variabile "posts"
    fetch(`${apiUrl}/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data));

    // Destroy Function
    function Destroy(id) {
        fetch(`${apiUrl}/posts/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                count = 1;
            });
    }

    // Variabile per contare il numero dei post
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
                                    {/* Show Details Button */}
                                    <Link
                                        to={`/posts/${post.id}`}
                                        type="button"
                                        className="btn btn-primary m-1 mt-0"
                                    >
                                        👁
                                    </Link>

                                    {/* Delete Post Button */}
                                    <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#deleteModal-${post.id}`}
                                        className="btn btn-danger m-1 mt-0"
                                    >
                                        🗑
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Delete Modals */}
                {posts.map((post) => (
                    <div
                        key={`deleteModal-${post.id}`}
                        className="modal fade"
                        id={`deleteModal-${post.id}`}
                        tabIndex="-1"
                        aria-labelledby={`deleteModalLabel-${post.id}`}
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id={`deleteModalLabel-${post.id}`}
                                    >
                                        Eliminazione post "{post.title}"
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Stai eliminando il post "{post.title}"!
                                        <br />
                                        Sei sicuro?
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Annulla
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => Destroy(post.id)}
                                    >
                                        Elimina
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
