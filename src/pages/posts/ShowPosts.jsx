import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
                console.table(data);

                const { post: newPost } = data;
                console.log(newPost);

                setPost(newPost);
            })
            .catch((err) => console.error(err));
    }

    return (
        <>
            <div className="container">
                {post && (
                    <img
                        src={post.image}
                        alt={post.title + "-image"}
                        width="200"
                    />
                )}
            </div>
        </>
    );
}
