import { useQuery } from "@apollo/client";
import { GET_VIEWER_QUERY } from "./api/getViewer";

export function Header(){
  const {loading: isLoading, data} = useQuery(GET_VIEWER_QUERY)
  if (isLoading || data === undefined){
    return <div>....</div>
  }
  return (
    <header>
      <img src={data.viewer.avatarUrl}/>
      <div>{data.viewer.name}</div>
      <h1>Github search</h1>
    </header>
  )
}