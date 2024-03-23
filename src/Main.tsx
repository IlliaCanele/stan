import { useSelector } from "react-redux"
import { Content } from "./Content"
import { RootState } from "./store/store"


export function Main(){
    const user = useSelector(
        (state: RootState) => state.user.user
    )
    return (
        <main>
            <h1>Witamy</h1>
        
        <p>
            {user ? `Witaj ${user.name}!` : 'Zaloguj się'}
        </p>
        <Content/>
        </main>
    )
}