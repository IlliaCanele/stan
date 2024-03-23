import { useEffect, useState } from "react";
import { idValue } from "./types";

type Params = {
    checkedIds?: idValue[]
    onCheckedIdsChange?: (checkedIds: idValue[]) => void
}

export function useChecked({checkedIds, onCheckedIdsChange}: Params) {
    const[resolvedCheckedIds, setresolvedCheckedIds] = useState<idValue[]>(checkedIds || [])

    const handleCheckChange = (checkedId: idValue) => () => {
        const isChecked = resolvedCheckedIds.includes(checkedId)
        let newCheckedIds = isChecked
            ? resolvedCheckedIds.filter((itemCheckedId) => itemCheckedId !== checkedId)
            : resolvedCheckedIds.concat(checkedId)
        if (onCheckedIdsChange){
            onCheckedIdsChange(newCheckedIds)
        } else {
            setresolvedCheckedIds(newCheckedIds)
        }   
    }
    useEffect(() => {
        const isControlled = checkedIds !== undefined
        if (isControlled){
            setresolvedCheckedIds(checkedIds)
        }
    },[checkedIds])
    return {handleCheckChange, resolvedCheckedIds}
}