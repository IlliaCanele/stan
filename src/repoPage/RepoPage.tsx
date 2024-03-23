import { useState } from "react";
import { SearchCriteria } from "../api/types";
import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { GET_REPO } from "../api/getRepo";
import { STAR_REPO } from "../api/starRepo";
import { SearchRepoForm } from "./SearchRepoForm";
import { FoundRepo } from "./FoundRepo";
import { StarRepoButton } from "./StarRepoButton";

export function RepoPage(){
    const [SearchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>()
    const [getRepo, {data}] = useLazyQuery(GET_REPO)
    const queryClient = useApolloClient()
    const [starRepo] = useMutation(STAR_REPO,{
        onCompleted: () => {
            queryClient.cache.writeQuery({
                query: GET_REPO,
                data:{
                    repository:{
                    ...data.repository,
                    viewerHasStarred: true,
                },
            },
            variables: SearchCriteria,
        })
        },
    })

    function handleSearch(search: SearchCriteria) {
        getRepo({
            variables: {...search},
        })
        setSearchCriteria(search)
    }

    function handleStarClick(){
        if (data) {
            starRepo({variables: {repoId: data.repository.id}})
        }
    }
    
    return (
        <main>
            <SearchRepoForm onSearch={handleSearch}/>
            {data && (
                <>
                <FoundRepo name={data.repository.name}
                description={data.repository.description}
                stars={data.repository.stargazers.totalCount}/>
                {!data.repository.viewerHasStarred &&
                <StarRepoButton onClick={handleStarClick} />}
                </>
            )}
        </main>
    )
}