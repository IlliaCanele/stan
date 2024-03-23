import { PostData } from "./types"


export async function getPosts(){
    const response = await fetch(
        process.env.REACT_APP_API_URL!
    )
    const body = (await response.json()) as unknown
    assertIsPosts(body)
    return body
}

export function assertIsPosts(
    postsData: unknown): 
    asserts postsData is PostData[]{
        if (!Array.isArray(postsData)){
            throw new Error("to nie jest tablica")
        }
        if (postsData.length === 0) {
            return
        }
        postsData.forEach((post) => {
            if (!('id' in post)) {
                throw new Error("brak ID")
            }
            // if (typeof post.id !== 'number'){
            //     throw new Error("id nie jest numerem")
            // }
        })
    }
