import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ShowPosts() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const goTo = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => fetchPost(), []);

    function fetchPost() {
        fetch(`${apiUrl}/posts/${id}`)
            .then((res) => {
                // In caso di errore
                if (!res.ok) {
                    // Se la risorsa non esiste
                    if (res.status === 404) goTo("/not-found");

                    throw new Error("Errore richiesta API");
                }

                return res.json();
            })
            .then((data) => {
                const { post: newPost } = data;
                setPost(newPost);
            })
            .catch((err) => console.error(err));
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Titolo Pagina */}
                    <h1>Dettagli {post.title}</h1>

                    {/* Pulsante Indietro */}
                    <Link
                        to={`/posts`}
                        type="button"
                        className="btn btn-primary"
                    >
                        Indietro
                    </Link>
                </div>

                <div className="d-flex gap-3 mt-3">
                    {post && (
                        <>
                            {/* Immagine Post */}
                            <img
                                src={post.image}
                                alt={post.title + "-image"}
                                width="400"
                            />

                            {/* Dettagli Post */}
                            <ul>
                                <li>
                                    <b>Titolo:</b> {post.title}
                                </li>
                                <li>
                                    <b>Autore:</b> {post.author}
                                </li>
                                <li>
                                    <b>Descrizione:</b> {post.description}
                                </li>
                                <li>
                                    <b>Genere:</b> {post.genre}
                                </li>
                                <li>
                                    <b>Stato:</b> {post.status}
                                </li>
                                <li>
                                    <b>Pubblicato:</b> {post.publish}
                                </li>
                                <li>
                                    <b>Tag:</b>
                                    <ul>
                                        {Array.isArray(post.tags) ? (
                                            post.tags.map((tag) => (
                                                <li
                                                    key={
                                                        post.id + "-tag-" + tag
                                                    }
                                                >
                                                    {tag}
                                                </li>
                                            ))
                                        ) : (
                                            <li>{post.tags}</li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
