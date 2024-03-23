import { FieldError, useForm } from "react-hook-form";
import { SearchCriteria } from "../api/types";
import "../index.css"; 


type Props = {
    onSearch: (search: SearchCriteria) => void
}

export function SearchRepoForm({ onSearch }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SearchCriteria>()

    const styleButton = {
        width: "100px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        color: "#BCD8C1",
        padding: "4px",
        cursor: "pointer",
        fontFamily: "comfortaa",
        marginLeft: "200px",
        border: "none"
    }

    const styleForm = {
        backgroundColor: "#BCD8C1",
        padding: "20px",
        borderRadius: "10px",
        width: "300px"
    }

    const styleFont = {
        fontFamily: "comfortaa",
        color: "#7cb385",
        fontWeight: "700"
    }

    const styleInput = {
        border: "1px solid #7cb385",
        height: "20px",
        borderRadius: "20px",
        marginBottom: "25px"
    }

    const styleInputAnother = {
        border: "1px solid #7cb385",
        height: "20px",
        borderRadius: "20px",
        marginBottom: "5px"
    }

    return (
        <center>
        <form noValidate onSubmit={handleSubmit(onSearch)} style={styleForm}>
            <div>
                <label style={styleFont} htmlFor="org">Organizacja</label>
                <br/>
                <input type="text"
                    id="org"
                    style={styleInputAnother}
                    {...register('org', { required: 'musisz wpisać organizacje' })} />
            </div>
            <div>
                <label htmlFor="repo" style={styleFont}>Repozytorium</label>
                <br/>
                <input type="text"
                    id="repo"
                    style={styleInput}
                    {...register('repo', { required: 'musisz wpisać repozytorium' })} />
            </div>
            <div>
                <button type="submit" disabled={isSubmitting} style={styleButton}>Search</button>
            </div>
        </form>
        </center>
    )
}