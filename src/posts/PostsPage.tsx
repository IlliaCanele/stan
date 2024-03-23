import { useEffect, useState } from "react";
import { NewPostData, PostData } from "./types";
import { getPosts } from "./getPosts";
import { PostsList } from "./PostsList";
import { NewPostForm } from "./NewPostForm";
import { savePost } from "./savePost";

export function PostsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        let cancel = false
        getPosts().then((data) => {
            if (!cancel) {
                setPosts(data)
                setIsLoading(false)
            }
        })
        return () => {
            cancel = true
        }
    }, [])
    async function handleSave(NewPostData: NewPostData){
        const newPost = await savePost(NewPostData)
        setPosts([newPost,...posts])
    }
    if (isLoading) {
        return <div>Ładuje...</div>
    }

    return (
        <div>
            <NewPostForm onSave={handleSave}/>
            <h2>Posty:</h2>
            <PostsList posts={posts} />
        </div>
    )
}