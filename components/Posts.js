import { useEffect, useState } from "react"
import { db, query, orderBy, collection, onSnapshot } from "../firebase"
import Post from "./Post"

function Posts({ prePosts }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (querySnapshot) => {
            setPosts(querySnapshot?.docs.map((doc => ({ ...doc.data(), id: doc.id }))))
        })
    }, [])

    return (
        <div>
            {posts ?
                posts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postImage}
                    />
                )) : prePosts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postImage}
                    />
                ))}
        </div>
    )
}

export default Posts
